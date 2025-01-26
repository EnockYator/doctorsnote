const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  healthcareFacility: {
    type: String,
    required: true,
  },
  beginningDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  acceptedTerms: {
    type: Boolean,
    required: true,
    validate: {
      validator: function (value) {
        return value === true;
      },
      message: "You must accept the Terms of Service.",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Request', requestSchema);
