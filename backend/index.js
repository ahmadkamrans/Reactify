// Routes
let authRoutes = require('./routes/auth')
let notesRoutes = require('./routes/notes')


// DB connection file
const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')


const app = express()
const port = 3001

connectToMongo()

app.get('/', (req, res) => {
    res.send('Hello World')
})


// Middlewares
app.use(express.json())
app.use(cors())
app.use('/api/auth', authRoutes)
app.use('/api/notes', notesRoutes)

app.listen(port, () => {
    console.log('Listening on port: ', port)
})