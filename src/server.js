import { app } from './main.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`)
})
