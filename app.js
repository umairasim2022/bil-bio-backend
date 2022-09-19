import dotenv from 'dotenv'
dotenv.config()

import session from "express-session";
import express from 'express'
import cors from 'cors';
import connectDB from './config/connectdb.js'
import Routes from './routes/Routes.js'
import Multer from 'multer'


const app = express()
const multer = Multer
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
const upload = multer({dest:'public/'})
// CORS Policy
//app.use(cors())

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes
app.use("/api/user", Routes)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})