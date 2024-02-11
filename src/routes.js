import express from 'express'

import { Film } from './database.js'

export const router = express.Router()

router.get('/', async (req, res) => {
  res.send('Hello World!')
})

router.get('/movie', async (req, res) => {
  const movie = await Film.find()

  res.json(movie)
})

router.get('/movie/:id', async (req, res) => {
  const movie = await Film.findById(req.params.id)

  res.json(movie)
})

router.post('/movie', async (req, res) => {
  console.log(req.body)
  const movie = new Film({
    id: Number(req.body.id),
    title: req.body.title,
    director: req.body.director,
    releaseYear: Number(req.body.releaseYear),
  })

  await movie.save()
  res.json(movie)
})

router.put('/movie/:id', async (req, res) => {
  const movie = await Film.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      director: req.body.director,
      releaseYear: req.body.releaseYear,
      poster: req.body.poster,
    },
    { new: true },
  )

  res.json(movie)
})

router.delete('/movie/:id', async (req, res) => {
  const movie = await Film.findByIdAndDelete(req.params.id)

  res.json(movie)
})
