import { Router } from 'express'
import { getUsers, getUserById } from '../controllers/user.controller'

const r = Router()

r.get('', getUsers)
r.get('/:id', getUserById)
// r.post('', )
// r.delete('/:id', )
// r.put('/:id', )

export default r