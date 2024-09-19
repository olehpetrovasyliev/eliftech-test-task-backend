const express = require("express");
const { eventsCtrl } = require("../../controllers");

const router = express.Router();

router.get("/", eventsCtrl.getAllEvents);

module.exports = router;
