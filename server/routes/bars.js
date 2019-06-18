const express = require('express');
const router = express.Router();
const { BarInfo } = require('../models')

router.post('/add', async (req, res) => {
    try {
        const data = {
            id: req.body.id,
            name: req.body.name,
            address: req.body.address,
            coordinates: req.body.coordinates,
        };
        const result = await BarInfo.create(data);
        res.send(result);
    } catch (err) {
        console.log(err)
        res.send(err)
    }

})

router.get('/', async (req, res) => {
    try {
        const result = ['first', 'second', 'third'];
        console.log('in bars endpoint')
        res.send(result);
    } catch (err) {
        console.log(err)
        res.send(err)
    }

})




module.exports = router;
