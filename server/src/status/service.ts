import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMonitorStatusByUserId = async (userId: string) => {
    try {
        return await prisma.monitorStatus.findMany({
            where: {
                monitor: {
                    owner: {
                        id: userId,
                    },
                },
            },
        });
    } catch (error) {
        throw new Error('Failed to fetch monitor status');
    } finally {
        await prisma.$disconnect();
    }
};