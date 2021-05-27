const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/index/:userId', ctrl.events.index);
router.get('/new/:userId', ctrl.events.renderNew);
router.post('/new/:userId', ctrl.events.createEvent);
router.get('/index/:userId', ctrl.events.renderEdit);
router.put('/index/:index', ctrl.events.editEvent);
router.delete('/index/:userId/:index', ctrl.events.deleteEvent);

module.exports = router;