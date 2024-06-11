// routes/photoRoutes.js
const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

router.post('/add', photoController.addPhoto);
router.get('/', photoController.getPhotos);

module.exports = router;
