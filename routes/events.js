const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/show/:userId', ctrl.events.show);
router.get('/new/:userId', ctrl.events.renderNew);
router.post('/new/:userId', ctrl.events.createEvent);
router.get('/show/:userId', ctrl.events.renderEdit);
router.put('/show/:index', ctrl.events.editEvent);
router.delete('/show/:index', ctrl.events.deleteEvent);

module.exports = router;