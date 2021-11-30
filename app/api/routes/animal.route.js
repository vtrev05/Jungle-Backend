const express = require("express");
const router = express.Router();

const { getAllAnimals, getByIdAnimal, getFilteredAnimal } = require("../controllers/animal.controller");

router.get("/", getAllAnimals);
router.get("/id/:id", getByIdAnimal);
router.get("/items", getFilteredAnimal);

module.exports = router;
