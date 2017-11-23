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

router.post('/animals', (req, res) => {
  const attributes = req.body
  const newAnimal = Animal.create(attributes)
  res.status(201).json(newAnimal)
})

router.delete('/animals/:id', (req, res) => {
  const id = req.params.id
  const animal = Animal.destroy(id)
  res.json({ message: "Animal has been DESTROYED"})
})

router.post('/animals/:id/update', (req, res) => {
  const id = req.params.id
  const attributes = req.body
  const newAnimal = Animal.update(id, attributes)
  res.json(newAnimal)
})

module.exports = router