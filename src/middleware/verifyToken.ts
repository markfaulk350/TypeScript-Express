import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    try {
        // const token = req.headers.authorization.split(" ")[1];
        // if(!token) {
        //     return res.status(401).json({
        //         message: "Invalid JWT. Auth Failed.",
        //     });
        // }
        // const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.userData = decoded;
        // next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid JWT. Auth Failed",
            error
        });
    }
}

// module.exports = (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(" ")[1];
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.userData = decoded;
//         next();

//     } catch (error) {
//         return res.status(401).json({
//             message: "JWT Auth failed"
//         });
//     }
// };