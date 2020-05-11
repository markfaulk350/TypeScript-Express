// 3rd Party Imports
import express, { Application } from 'express'
import bodyParser from 'body-parser'

// Personal Imports
import indexRoutes from './routes/index'
import userRoutes from './routes/user'

// Create Express Instance
const app: Application = express()

// Settings
app.set('port', 3000 || process.env.PORT)

// 3rd Party Middleware
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use(indexRoutes)
app.use('/users', userRoutes)

export default app