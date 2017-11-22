const express = require('express')

const router = express.Router()

let animals = [
  {
    name: 'Meercat',
    count: 27
  },
  {
    name: 'Lion',
    count: 4
  },
  {
    name: 'Black Rhino',
    count: 1
  },
  {
    name: 'Giraffe',
    count: 5
  }
]

router.get('/animals', (req, res) => {
  res.json(animals)
})

module.exports = router