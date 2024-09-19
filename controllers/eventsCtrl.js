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
    {
      createdAt: false,
      updatedAt: false,
      participants: false,
      versionKey: false,
    }
  )
    .limit(Number(limit))
    .skip((page - 1) * limit)
    .sort(sortOptions);
  res.json(result);
};

const getEventById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Event.findById(id, {
    createdAt: false,
    updatedAt: false,
    versionKey: false,
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

const addParticipant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, date_of_birth, heard_about_us } = req.body;

    const event = await Event.findById(id);
    if (!event) {
      throw HttpError(404, `Event with id ${id} not found`);
    }

    const newParticipant = {
      name,
      email,
      date_of_birth,
      heard_about_us,
    };

    event.participants.push(newParticipant);

    await event.save();

    res.status(201).json({
      message: "Participant added successfully",
      participant: newParticipant,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
  getEventById: ctrlWrapper(getEventById),
  addParticipant: ctrlWrapper(addParticipant),
};
