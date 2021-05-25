const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/show/:userId', ctrl.events.show);
router.get('/new.ejs', ctrl.events.renderNew);
router.post('/new.ejs', ctrl.events.createEvent);
router.get('/show.ejs', ctrl.events.renderEdit);
router.put('/show.ejs', ctrl.events.editEvent);
router.delete('/show.ejs', ctrl.events.deleteEvent);

module.exports = router;