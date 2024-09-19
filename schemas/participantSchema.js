const Joi = require("joi");

const participantSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  date_of_birth: Joi.date().required(),
  heard_about_us: Joi.string()
    .valid("Social Media", "Friend", "Advertisement")
    .required(),
});

module.exports = { participantSchema };
