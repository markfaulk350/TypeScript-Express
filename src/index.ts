import dotenv from 'dotenv'
dotenv.config()

import app from './app'
import './database'

function init() {
    app.listen(app.get('port'), () => console.log('Listening on http://localhost:3000'))
}

init()

// killall node