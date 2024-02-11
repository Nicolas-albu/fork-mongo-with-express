import express from 'express'

import { filmRouter } from './routes/films.routes.js'

export const app = express()

app.use(express.json())
app.use(filmRouter)
