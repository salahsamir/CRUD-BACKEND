import express from 'express';
import { App } from './src/app.js';
const app = express()
import cors from 'cors'
import { configDotenv } from 'dotenv';
const port = 3000
configDotenv({ path: "./config/.env" });
app.use(express.json())
app.use(cors())

App(app,port)