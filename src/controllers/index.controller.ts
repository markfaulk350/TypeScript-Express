import { Request, Response } from 'express'

export const protectedRoute = async (req: Request, res: Response): Promise<Response> => {
    try {
        let { currentUser } = req
        return res.status(200).json(currentUser)
    } catch (e) {
        console.log(e)
        return res.status(500).json(`Internal Server Error: ${e}`)
    }
}