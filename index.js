import express from 'express';
import { App } from './src/app.js';
const app = express()
import cors from 'cors'
const port = 3000
app.use(express.json())
app.use(cors())
App(app,port)