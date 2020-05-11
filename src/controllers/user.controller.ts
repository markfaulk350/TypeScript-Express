import { Request, Response } from 'express'
// import { QueryResult } from 'pg'

// import { pool } from '../database'

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        // const response: QueryResult = await pool.query('SELECT * FROM users')
        // console.log(response.rows)
        // res.status(200).json(response.rows)

        return res.status(200).json({
            users: [
                { name: 'Mark' },
                { name: 'James' },
                { name: 'Phil' }
            ]
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json(`Internal Server Error: ${e}`)
    }
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    return res.json({ name: 'Mark', id })
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        return res.status(200).json({ id: 1 })
    } catch (e) {
        console.log(e)
        return res.status(500).json(`Internal Server Error: ${e}`)
    }
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        return res.status(200).json('User updated')
    } catch (e) {
        console.log(e)
        return res.status(500).json(`Internal Server Error: ${e}`)
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        return res.status(200).json('User deleted')
    } catch (e) {
        console.log(e)
        return res.status(500).json(`Internal Server Error: ${e}`)
    }
}