const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller'); // Updated path

router.get('/', controller.getIndexPage); // Updated controller reference

router.post('/add', controller.addTask); // Updated controller reference

router.get('/remove/:id', controller.removeTask); // Updated controller reference

module.exports = router;
