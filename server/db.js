const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTanks: getTanks,
  newFish: newFish,
  getFish: getFish,
  editFish: editFish,
  getTankById: getTankById,
  getFishByTankId: getFishByTankId
}

function getTanks (db = connection) {
  return db('tanks').select()
}

function getTankById (id, db = connection) {
  return db('tanks').where('tanks.id', id).select()
}

function getFishByTankId (id, db = connection) {
  return db('fish').where('tank_id', id).select()
}

function getFish (db = connection) {
  return db('fish').select()
}

function editFish (updatedFish, id, db = connection) {
  return db('fish').where('fish.id', id).update(updatedFish)
}

function newFish (fish, db = connection) {
  return db('fish')
    .insert({
      image: fish.image,
      species: fish.species,
      quantity: fish.quantity,
      tank_id: fish.tank_id
    })
}