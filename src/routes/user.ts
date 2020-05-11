import { Router } from 'express'
import { getUsers, getUserById } from '../controllers/user.controller'

const r = Router()

r.route('/')
    .get(getUsers)
    // .post(createUser)

r.route('/:id')
    .get(getUserById)
    // .put(updateUser)
    // .delete(deleteUser)

export default r