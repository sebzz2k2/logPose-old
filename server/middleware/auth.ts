import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { Socket } from 'socket.io';
const JWT_SECRET = process.env.JWT_SECRET || 'secret';


export const verifyExpress = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.body.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}


export const verifySocket = (socket: Socket, next: (err?: any) => void) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error('No token provided'));
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        socket.data.user = decoded;
        next();
    }
    catch (err) {
        return next(new Error('Unauthorized'));
    }
}
