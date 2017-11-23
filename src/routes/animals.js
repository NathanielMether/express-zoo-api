const express = require('express')
const Animal = require('../models/animal')

const router = express.Router()

router.get('/animals', (req, res) => {
  const animals = Animal.all()
  res.json(animals)
})

router.get('/animals/:id', (req, res) => {
  // find animal that matches id
  const id = req.params.id
  const animal = Animal.find(id)
  if  (animal) {
    res.json(animal)
  }
  else {
    res.status(404).json({ error: `Animal with id '${id}' was not found` })
  }
})

module.exports = router