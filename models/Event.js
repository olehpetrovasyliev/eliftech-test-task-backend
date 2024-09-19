const { Schema, model } = require("mongoose");

const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  heard_about_us: {
    type: String,
    enum: ["Social Media", "Friend", "Advertisement"],
    required: true,
  },
});

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  event_date: {
    type: Date,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  participants: [participantSchema],
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
