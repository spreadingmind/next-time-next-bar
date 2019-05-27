const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      }]
    )
  })
  

module.exports = router;
