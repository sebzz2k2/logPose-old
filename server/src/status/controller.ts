import { Request, Response } from 'express'
import { getMonitorStatusByUserId } from './service';


export const getServerStatus = async (req: Request, res: Response) => {
    try {
        const { user } = req.body;
        if (!user || !user.id) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid user data',
            });
        }

        const monitorStatus = await getMonitorStatusByUserId(user.id);

        res.status(200).json({
            status: 'ok',
            message: 'Server is running',
            monitorStatus,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};
