const express = require("express");
const router = express.Router();

const { getAllHabitats, getByIdHabitat, getFilteredHabitat } = require("../controllers/habitat.controller");

router.get("/", getAllHabitats);
router.get("/id/:id", getByIdHabitat);
router.get("/items", getFilteredHabitat);

module.exports = router;