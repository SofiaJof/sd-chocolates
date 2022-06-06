const express = require("express");
const router = express.Router();

const pruebaController = require("../controllers/pruebaController");

router.get("/", pruebaController.prueba)


module.exports = router;