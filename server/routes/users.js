const express = require('express')
const User = require('../models/Vendor')

const router = express.Router()

router.get('/', (req, res, next) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => next(err))
})

router.post('/', (req, res, next) => {
})

module.exports = router;
