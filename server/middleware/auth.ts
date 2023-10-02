import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const  verifyToken = (req:Request,res:Response,next:NextFunction) => {
    const token = req.headers && req.headers.authorization &&  req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({message: 'No token provided'});
    try {
        const decoded = jwt.verify(token,JWT_SECRET);
        req.body.user = decoded;
        next();
    }
    catch(err) {
        return res.status(401).json({message: 'Unauthorized'});
    }


}

export default verifyToken;
