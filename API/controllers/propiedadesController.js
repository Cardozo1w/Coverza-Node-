const router = require('express').Router();
const {Propiedades} = require('../config/db');

router.get("/", async (req, res) => {
    const propiedades = await Propiedades.findAll();
    res.json(propiedades);
  });


module.exports = router;