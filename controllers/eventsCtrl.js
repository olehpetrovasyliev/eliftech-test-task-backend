const Event = require("../models/Event");
const { ctrlWrapper } = require("../helpers");

const getAllEvents = async (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const sortBy = req.query.sortBy || "eventDate";
  const sortDirection = req.query.sortDirection === "desc" ? -1 : 1;

  const sortOptions = { [sortBy]: sortDirection };

  const result = await Event.find(
    {},
    { "-createdAt": 0, "-updatedAt": 0, "-participants": 0 }
  )
    .limit(Number(limit))
    .skip((page - 1) * limit)
    .sort(sortOptions);
  res.json(result);
};

const getEventById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Event.findById(id, {
    createdAt: 0,
    updatedAt: 0,
  });
  if (!result) {
    throw HttpError(404, `Event with id ${id} not found`);
  }

  const modifiedEvent = {
    ...result.toObject(),
    participants: result.participants.map((participant) => ({
      _id: participant._id,
      name: participant.name,
      email: participant.email,
    })),
  };
  res.json(modifiedEvent);
};

module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
  getEventById: ctrlWrapper(getEventById),
};
