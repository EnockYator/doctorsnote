const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Common fields for all users
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'customer', 'doctor'],
    required: true,
  },
  // Admin-specific fields
  adminCode: {
    type: String,
    required: function () {
      return this.role === 'admin';
    },
  },
  // Doctor-specific fields
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: function () {
      return this.role === 'doctor';
    },
  },
  country: {
    type: String,
    required: function () {
      return this.role === 'doctor';
    },
  },
  city: {
    type: String,
    required: function () {
      return this.role === 'doctor';
    },
  },
  specialization: {
    type: String,
    required: function () {
      return this.role === 'doctor';
    },
  },
  institution: {
    type: String,
    required: function () {
      return this.role === 'doctor';
    },
  },
  certificate: {
    type: String, // Assuming this is a file path or URL
    required: function () {
      return this.role === 'doctor';
    },
  },
});

module.exports = mongoose.model('User', userSchema);
