const router = require('express').Router();

const Zoos = require('./zoos-model.js');

router.get('/', (req, res) => {
    Zoos.find()
    .then( animals => {
        res.status(200).json(animals);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});

router.get('/:id', (req, res) => {
    Zoos.findById(req.params.id)
    .then( animal => {
        res.status(200).json(animal);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});

router.post('/', (req, res) => {
    Zoos.add(req.body)
    .then( animal => {
        res.status(201).json(animal);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});

router.put('/:id', (req, res) => {
    Zoos.update(req.params.id, req.body)
    .then( count => {
        if(count) {
            res.status(200).json({
                message: `${count} records updated`
            })
        } else {
            res.status(404).json({
                message: "That animal does not exist"
            })
        }
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

router.delete('/:id', (req, res) => {
    Zoos.remove(req.params.id)
    .then( count => {
        if(count) {
            res.status(200).json({
                message: `${count} record was deleted`
            })
        } else {
            res.status(404).json({
                message: "That animal was not found"
            })
        }
    })
    .catch(error => {
        res.status(500).json(error);
    })
})



module.exports = router;