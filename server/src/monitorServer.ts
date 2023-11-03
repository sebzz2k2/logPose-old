import axios from 'axios';
import cron from 'node-cron';
import { PrismaClient, Monitor, MonitorStatus } from '@prisma/client';
const logger = require('../../logger/logger');

const prisma = new PrismaClient();

interface Status {
    status: boolean;
    id: string;
}

const fetchMonitorStatus = async (monitor: Monitor): Promise<Status> => {
    try {
        const response = await axios.get(monitor.url);
        const status = response.status >= 200 && response.status < 300;
        return { status, id: monitor.id };
    } catch (error) {
        return { status: false, id: monitor.id };
    }
};

const updateMonitorStatus = async (status: Status, currentTimestamp: Date): Promise<MonitorStatus> => {
    const existingStatus = await prisma.monitorStatus.findFirst({
        where: { monitorId: status.id },
    });

    const lastUp = status.status
        ? currentTimestamp
        : existingStatus?.lastUp || new Date(0);

    const upsertData = {
        where: { monitorId: status.id },
        update: {
            status: status.status,
            lastCheck: currentTimestamp,
            lastUp,
        },
        create: {
            status: status.status,
            monitorId: status.id,
            lastCheck: currentTimestamp,
            lastUp,
        },
    };

    return prisma.monitorStatus.upsert(upsertData);
};

const setupCron = async (user: string): Promise<void> => {
    cron.schedule('* * * * * *', async () => {
        const allMonitorStatuses = await prisma.monitorStatus.findMany({
            where: { monitor: { ownerId: user } },
        });

        const allMonitors = await prisma.monitor.findMany({
            where: { ownerId: user },
        });

        const resultObject: Record<string, MonitorStatus> = {};
        allMonitorStatuses.forEach(item => {
            const key = item.monitorId;
            resultObject[key] = { ...item };
        });

        const currentTimestamp = new Date();

        const statusUpdates = allMonitors.map(async monitor => {
            if (currentTimestamp.getTime() - resultObject[monitor.id].lastCheck.getTime() >= monitor.interval * 1000) {
                const status = await fetchMonitorStatus(monitor);
                return updateMonitorStatus(status, currentTimestamp);
            }
        });

        await Promise.all(statusUpdates);
    });
};

export default setupCron;
