import { Router, Request, Response } from 'express'

const r = Router()

r.get('/', (req: Request, res: Response) => {
    res.send('<h1>Home page</h1>')
})

export default r