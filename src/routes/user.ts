import { Router } from 'express'
import { getUsers, getUserById } from '../controllers/user.controller'

import { TokenValidation } from '../middleware/verifyToken'

const r = Router()

r.use(TokenValidation)

r.route('/')
    .get(getUsers)
    // .post(createUser)

r.route('/:id')
    .get(getUserById)
    // .put(updateUser)
    // .delete(deleteUser)

export default r