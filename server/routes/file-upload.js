const express = require('express');
const router = express.Router();
const uploader = require('../configs/cloudinary');

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
  console.log(req.body)
  res.json({ secure_url: req.file.secure_url });
})

module.exports = router;