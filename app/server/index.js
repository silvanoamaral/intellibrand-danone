const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

const PORT = process.env.port || 3000
const listaPlantas = require('../modules/ListaPlantas')

app.use(express.static('./'))

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'../../index.html'))
})

router.use('/api/plantas', async (req, res) => {
  const result = await listaPlantas(req.url)
  res.send(result)
})

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Running at Port ${PORT}: http://localhost:${PORT}`)
})