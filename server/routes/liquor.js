const express = require('express')
const Liquor = require('../models/Vendor')

const router = express.Router()

router.get('/', (req, res, next) => {
  Liquor.find()
    .then(liquor => {
      res.json(liquor)
    })
    .catch(err => next(err))
})

router.post('/', (req, res, next) => {
})

module.exports = router;
