import pg from 'pg'
import 'dotenv/config'

const { Pool } = pg
const {DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE } = process.env

const config = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  allowExitOnIdle: true,

  // connectionString: DB_URL
}

const pool = new Pool(config)
console.log(config)

const db = (query, values) => pool
  .query(query, values)
  .then(({ rows }) => rows)
  .catch(({ code, message }) => {
    const error = { status: false, code, message }
    throw error
  })

export default db
