const Event = require("../models/Event");
const { ctrlWrapper } = require("../helpers");

const getAllEvents = async (req, res, next) => {
  const result = await Event.find({}, "-createdAt");
  res.json(result);
};

module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
};
