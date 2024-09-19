const Joi = require("joi");

const participantSchema = Joi.object({
  fullName: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.date().iso().required(),
  heardAboutUs: Joi.string()
    .valid("Social Media", "Friend", "Advertisement")
    .required(),
});

module.exports = { participantSchema };
