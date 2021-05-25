const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/show.ejs', ctrl.events.show);
router.get('/new.ejs', ctrl.pokemon.renderNew);
router.post('/new.ejs', ctrl.pokemon.createPokemon);
router.get('/show.ejs', ctrl.pokemon.renderEdit);
router.put('/show.ejs', ctrl.pokemon.updatePokemon);
router.delete('/show.ejs', ctrl.pokemon.deletePokemon);




module.exports = router;