const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTanks: getTanks,
  newFish: newFish,
  getFish: getFish,
  editFish: editFish,
  getTankById: getTankById
}

function getTanks (db = connection) {
  return db('tanks').select()
}

function getTankById (id, db = connection) {
  return db('tanks').where('id', id).select()
}

function newFish (fish, db = connection) {
  return db('fish').insert(fish)
}

function getFish (db = connection) {
  return db('fish').select()
}

function editFish (updatedFish, id, db = connection) {
  return db('fish').where('fish.id', id).update(updatedFish)
}
