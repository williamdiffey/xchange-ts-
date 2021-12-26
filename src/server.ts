import dotenv from 'dotenv'

import knex from 'knex'
import { PORT } from './config'
import server from './app'
import app from './app'

const db = knex({
  client: 'pg',
  // connection: DB_URL,
})

app.set('db', db)

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
