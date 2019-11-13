const express = require('express')
const axios = require('axios')
const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, '.env')
})
const router = express.Router();

const User = require('../models/User')

router.get('/users/:username', (req, res, next) => {
  let username = req.params.username
  axios.get(`https://api.unsplash.com/users/${username}/?client_id=${process.env.UNSPLASH_ACCESSKEY}`)
    .then((response) => {
      res.json(response.data)
    }).catch(err => next(err))
})

router.get('/profile/:id', (req, res, next) => {
  let id = req.params.id
  User.findById(id).then(user => {
    res.json({ user })
  }).catch(err => console.error(err))
})

// router.get('/edit-user', (req, res, next) => {
//     .then((response) => {
//   res.json(response.data)
// }).catch(err => next(err))
// })

module.exports = router;