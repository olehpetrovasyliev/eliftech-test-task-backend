const express = require("express");
const { eventsCtrl } = require("../../controllers");
const { isValidId, validateBody } = require("../../middlewares");
const { participantSchema } = require("../../schemas");

const router = express.Router();

router.get("/", eventsCtrl.getAllEvents);
router.get("/:id", eventsCtrl.getEventById);
router.post(
  "/:id/participants",
  isValidId,
  validateBody(participantSchema),
  eventsCtrl.addParticipant
);

module.exports = router;
