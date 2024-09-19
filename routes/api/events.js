const express = require("express");
const { eventsCtrl } = require("../../controllers");

const router = express.Router();

router.get("/", eventsCtrl.getAllEvents);
router.get("/:id", eventsCtrl.getEventById);

module.exports = router;
