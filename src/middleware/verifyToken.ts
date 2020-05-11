import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { CurrentUser } from '../interface/CurrentUser'

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization
        if (authHeader) {
            const token = authHeader.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as CurrentUser
            req.currentUser = decoded
            next()
        } else {
            return res.status(401).json({
                message: "Invalid JWT. Auth Failed"
            })
        }
    } catch (error) {
        return res.status(401).json({
            message: "Invalid JWT. Auth Failed",
            error
        })
    }
}