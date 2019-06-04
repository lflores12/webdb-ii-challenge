const router = require('express').Router();

const Zoos = require('./zoos-model.js');

router.get('/', (req, res) => {
    Zoos.find()
    .then( zoos => {
        res.status(200).json(zoos);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});

module.exports = router;