const Event = require("../models/Event");
const { ctrlWrapper } = require("../helpers");

const getAllEvents = async (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const result = await Event.find({}, "-createdAt")
    .limit(Number(limit))
    .skip((page - 1) * limit);
  res.json(result);
};

module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
};
