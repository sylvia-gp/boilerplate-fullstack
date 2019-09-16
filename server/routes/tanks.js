const express = require('express')
const db = require('../db')
const router = express.Router()


router.get('/', (req, res) => {
  db.getTanks()
  .then(tanks => {
      res.json(tanks)
  })
})

router.get('/:id', (req, res) => {
  db.getTankById(req.params.id)
  .then(tank => {
    res.json(tank)
  })
})

router.get('/fish/:id', (req, res) => {
  db.getFishByTankId(req.params.id)
  .then(fish => {
      res.json(fish)
  })
})

router.post('/newFish', (req, res) => {
  db.newFish(req.body)
  .then(() => {
    res.status(201).send('')
  })
})

router.delete('/fish/:id', (req, res) => {
  const id = req.params.id

  db.deleteFish(id)
  .then(
    res.redirect('/fish/:id')
  )
})

// router.get('/tank:id/fish', (req, res) => {
//   const id = req.params.id
//   knex('fish')
//   .join('tanks', 'fish.tank_id', 'tanks.id')
//   .where({'fish.tank_id': id})
//   .select('fish.id', 'image', 'species', 'quantity')
//   .then(function (fishes) {
//       const fish = fishes
//       res.render('partials/fishinfo', {fish: fish})
//   })
// })





module.exports = router
