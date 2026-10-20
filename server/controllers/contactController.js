const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');
const { isDbConnected } = require('../config/db');

const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    if (!isDbConnected()) {
      return res.status(503).json({
        success: false,
        message: 'Database is currently offline. Please configure a valid MONGODB_URI in server/.env.',
      });
    }

    const sanitizedSubject = subject && subject.trim() ? subject.trim() : 'Portfolio Contact Inquiry';

    const newContact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: sanitizedSubject,
      message: message.trim(),
    });

    const isEmailConfigured = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);

    let emailSent = false;
    let emailError = null;

    if (isEmailConfigured) {
      try {
        const cleanPassword = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.EMAIL_PORT, 10) || 587,
          secure: process.env.EMAIL_SECURE === 'true',
          auth: {
            user: process.env.EMAIL_USER,
            pass: cleanPassword,
          },
        });

        const recipientEmail = process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER;
        const submissionTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
          replyTo: email.trim(),
          to: recipientEmail,
          subject: `[Portfolio Inquiry] ${sanitizedSubject} - ${name.trim()}`,
          text: `New contact submission received from your portfolio:

Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${sanitizedSubject}
Submission Time: ${submissionTime}

Message:
${message.trim()}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #ea580c; margin-top: 0;">New Portfolio Message</h2>
              <p>You received a new inquiry from your portfolio website contact form.</p>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
              <p><strong>Name:</strong> ${name.trim()}</p>
              <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
              <p><strong>Subject:</strong> ${sanitizedSubject}</p>
              <p><strong>Time:</strong> ${submissionTime}</p>
              <div style="margin-top: 16px; padding: 12px; background-color: #f8fafc; border-left: 4px solid #ea580c; border-radius: 4px;">
                <strong>Message:</strong>
                <p style="white-space: pre-wrap; margin: 8px 0 0;">${message.trim()}</p>
              </div>
            </div>
          `,
        });

        emailSent = true;
      } catch (err) {
        console.error('Email sending failed:', err.message);
        emailError = err.message;
      }
    }

    if (emailSent) {
      return res.status(201).json({
        success: true,
        emailSent: true,
        message: 'Thank you! Your message was saved and notification email sent successfully.',
        data: {
          id: newContact._id,
          name: newContact.name,
          email: newContact.email,
          subject: newContact.subject,
          createdAt: newContact.createdAt,
        },
      });
    }

    if (!isEmailConfigured) {
      return res.status(201).json({
        success: true,
        emailSent: false,
        emailConfigured: false,
        message: 'Your message has been saved successfully in our database! (Email service is not configured on server).',
        data: {
          id: newContact._id,
          name: newContact.name,
          email: newContact.email,
          subject: newContact.subject,
          createdAt: newContact.createdAt,
        },
      });
    }

    return res.status(201).json({
      success: true,
      emailSent: false,
      emailConfigured: true,
      message: 'Your message has been saved to MongoDB, but email delivery encountered an error. Please verify server SMTP settings.',
      data: {
        id: newContact._id,
        name: newContact.name,
        email: newContact.email,
        subject: newContact.subject,
        createdAt: newContact.createdAt,
      },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(' '),
      });
    }
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    if (!isDbConnected()) {
      return res.status(503).json({
        success: false,
        message: 'Database is currently offline. Please connect MongoDB.',
      });
    }

    const messages = await Contact.find().sort({ createdAt: -1 }).limit(50);
    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContact,
  getAllContacts,
};
