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

let nextID = 5

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

// Create 
function create(attributes) {
  // create new animal 'record' from attributes
  const newAnimal = Object.assign({}, attributes, {
    id: nextID
  })
  nextID += 1

  animals.push(newAnimal)

  return newAnimal
}

function update(animalID, attributes) {
  id = parseInt(animalID, 10)
  const animal = find(id)
  const updateAnimal = Object.assign({}, animal, attributes)

  animals.forEach((animal) => {
    if (animal.id === id) {
      index = animals.indexOf(animal)
      animals.splice(index, 1, updateAnimal)
    }
  })

  return updateAnimal
}

function destroy(animalID) {
  id = parseInt(animalID, 10)
  animals.forEach((animal) => {
    if (animal.id === id) {
      index = animals.indexOf(animal)
      animals.splice(index, 1)
    }
  })
}

module.exports = {
  all,
  find,
  create,
  destroy,
  update
}