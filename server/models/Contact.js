const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name.'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long.'],
      maxlength: [60, 'Name cannot exceed 60 characters.'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email address.'],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address.',
      ],
    },
    subject: {
      type: String,
      trim: true,
      maxlength: [200, 'Subject cannot exceed 200 characters.'],
      default: 'General Inquiry',
    },
    message: {
      type: String,
      required: [true, 'Please enter a message.'],
      trim: true,
      minlength: [5, 'Message must be at least 5 characters long.'],
      maxlength: [2000, 'Message cannot exceed 2000 characters.'],
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
