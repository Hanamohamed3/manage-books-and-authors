import express from 'express'
import { dbConnection } from './db/dbConnection.js';
import bookRoutes from './src/modules/Book/book.routes.js';
import authorRoutes from './src/modules/author/author.routes.js';
const app = express()
const port = 3000
app.use(express.json())


dbConnection


app.use(bookRoutes)
app.use(authorRoutes)



app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))