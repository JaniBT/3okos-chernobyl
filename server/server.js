import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const PORT = 8080

const app = express()

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})