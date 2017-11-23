let animals = [
  {
    id: 1,
    name: 'Meercat',
    count: 27
  },
  {
    id: 2,
    name: 'Lion',
    count: 4
  },
  {
    id: 3,
    name: 'Black Rhino',
    count: 1
  },
  {
    id: 4,
    name: 'Giraffe',
    count: 5
  }
]

function all() {
  return animals
}

function find(id) {
  // insure 'id' is an integer
  id = parseInt(id, 10)
  let foundAnimal = null
  // loop through all animals
  animals.forEach((animal) => {
    // compare this animals id to the one we want to find
    if (animal.id === id) {
      // If so, remember this animal
      foundAnimal = animal
    }
  })
  return foundAnimal
}

module.exports = {
  all,
  find
}