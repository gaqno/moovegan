import express from 'express'
import authRouter from './api/auth/auth.routes'

const app = express()
app.use(express.json())

app.use('/auth', authRouter);

app.listen(3000, () =>
console.log(`🚀 MooVegan ready at: http://localhost:3000 🐄`))