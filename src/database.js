import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.DATABASE_URL)

const FilmSchema = new mongoose.Schema({
  id: Number,
  title: String,
  director: String,
  releaseYear: Number,
})

export const Film = mongoose.model('Film', FilmSchema)
