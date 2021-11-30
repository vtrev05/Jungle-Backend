const express = require("express");
const router = express.Router();

const { getAllFamilies, getByIdFamilies, getFilteredFamily } = require("../controllers/families.controller");


router.get('/', getAllFamilies);
router.get("/id/:id", getByIdFamilies);
router.get("/items", getFilteredFamily);


module.exports = router;