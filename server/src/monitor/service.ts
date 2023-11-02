import { PrismaClient } from '@prisma/client';
import { Monitor } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteMonitorById = async (id: string): Promise<boolean> => {
    try {
        const monitor = await prisma.monitor.delete({
            where: {
                id
            }
        });
        if (!monitor) {
            return false;
        }
        return true;
    } catch (error) {
        console.error(`Error deleting monitor with id ${id}: ${error}`);
        return false;
    }
}

export const updateMonitorById = async (id: string, name: string, url: string, interval: number): Promise<boolean> => {
    try {
        const monitor = await prisma.monitor.update({
            where: {
                id
            },
            data: {
                name,
                url,
                interval,
                updatedAt: new Date(),
            }
        });
        if (!monitor) {
            return false;
        }
        return true;
    } catch (error) {
        console.error(`Error updating monitor with id ${id}: ${error}`);
        return false;
    }
}

export const createNewMonitor = async (name: string, url: string, interval: number, ownerId: string): Promise<boolean> => {
    try {
        const monitor = await prisma.monitor.create({
            data: {
                name,
                url,
                interval,
                ownerId,
                updatedAt: new Date(),
            }
        });
        if (!monitor) {
            return false;
        }
        return true;
    } catch (error) {
        console.error(`Error creating new monitor: ${error}`);
        return false;
    }
}

export const findUniqueMonitor = async (id: string): Promise<Monitor | boolean> => {
    try {
        const monitor = await prisma.monitor.findUnique({
            where: {
                id
            }
        });
        if (!monitor) {
            return false;
        }
        return monitor;
    } catch (error) {
        console.error(`Error finding monitor with id ${id}: ${error}`);
        return false;
    }
}

export const getAllMonitorsByUserId = async (userId: string): Promise<Monitor[] | boolean> => {
    try {
        const monitors = await prisma.monitor.findMany({
            where: {
                ownerId: userId
            }
        });
        if (!monitors) {
            return false;
        }
        return monitors;
    } catch (error) {
        console.error(`Error getting monitors for user with id ${userId}: ${error}`);
        return false;
    }
}