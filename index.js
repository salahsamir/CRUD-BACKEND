import express from 'express';
import { App } from './src/app.js';
const app = express()
const port = 3000
app.use(express.json())
App(app,port)