const express = require('express')
const Vendor = require('../models/Vendor')

const router = express.Router()

router.get('/', (req, res, next) => {
  Vendor.find()
    .then(vendors => {
      res.json(vendors)
    })
    .catch(err => next(err))
})

router.post('/', (req, res, next) => {
})

module.exports = router;
