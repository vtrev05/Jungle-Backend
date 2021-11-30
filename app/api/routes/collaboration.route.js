const express = require("express");
const router = express.Router();

const { postCollaboration } = require("../controllers/collaboration.controller");

router.post("/", postCollaboration);

module.exports = router;