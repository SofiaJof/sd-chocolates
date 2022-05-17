const express = require("express");
const router = express.Router();

const chocolatesController = require ("../controllers/chocolatesController");

router.get("/", chocolatesController.chocolates);

router.get("/marroc", chocolatesController.marroc);

router.get("/ddl", chocolatesController.DDL);

router.get("/frutosSecos", chocolatesController.frutosSecos);

router.get("/galletitas", chocolatesController.galletitas);


module.exports = router;