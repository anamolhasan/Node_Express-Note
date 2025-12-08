import express, { Request, Response } from 'express'
import {Pool} from 'pg'

const app = express()
const port = 5000

const pool = new Pool({
    connectionString:`postgresql://neondb_owner:npg_adOElLe72pbP@ep-royal-mouse-ah9mynif-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
})



// parser
app.use(express.json())
// app.use(express.urlencoded())

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World! Bangladesh')
})

app.listen(port, () => {
  console.log(`Example app listening  http://localhost:${port}`)
})
