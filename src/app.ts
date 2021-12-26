import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

import { NODE_ENV } from './config'
import errorHandler from './middleware/error-handler'

dotenv.config()

const app = express()
const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common'
// const server = require('http').Server(app)
const test = process.env.message

app.use(cors())
app.use(helmet())
app.use(morgan(morganOption))

app.get('/', (req, res) => {
  res.send(test)
})

app.use(errorHandler)

export default app
