const express = require('express');
const router = express.Router();

const propiedadesRouter = require('../controllers/propiedadesController');

router.use('/propiedades', propiedadesRouter);

module.exports = router;
