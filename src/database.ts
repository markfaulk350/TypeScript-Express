import { createPool } from 'mysql2/promise'

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'dbname',
        connectionLimit: 10
    })
    return connection
}

// ---- POSTGRES SQL --------------
// import { Pool } from 'pg'

// export const pool = new Pool({
//     user: '',
//     host: '',
//     password: '',
//     database: '',
//     port: 5432
// })
