import { Router, Request, Response } from 'express'
import { protectedRoute } from '../controllers/index.controller'

import { TokenValidation } from '../middleware/verifyToken'

const r = Router()

r.get('/', (req: Request, res: Response) => {
    res.send('<h1>Home page</h1>')
})

r.get('/protected', TokenValidation, protectedRoute)



export default r