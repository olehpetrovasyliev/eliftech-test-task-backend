const Event = require("../models/Event");
const { ctrlWrapper } = require("../helpers");

const getAllEvents = async (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const sortBy = req.query.sortBy || "eventDate";
  const sortDirection = req.query.sortDirection === "desc" ? -1 : 1;

  const sortOptions = { [sortBy]: sortDirection };

  const result = await Event.find({}, "-createdAt")
    .limit(Number(limit))
    .skip((page - 1) * limit)
    .sort(sortOptions);
  res.json(result);
};

module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
};
