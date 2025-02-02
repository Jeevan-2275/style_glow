const nodemailer = require('nodemailer');
const env = require('../config/env');

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },
});

// Send an email
const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: `"Salon App" <${env.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent to:', to);
  } catch (err) {
    console.error('Email send error:', err.message);
    throw new Error('Failed to send email');
  }
};

// Email templates
const emailTemplates = {
  bookingConfirmation: (userName, salonName, date, time) => `
    <div>
      <h2>Hi ${userName},</h2>
      <p>Your booking at ${salonName} is confirmed!</p>
      <p>Date: ${date}</p>
      <p>Time: ${time}</p>
    </div>
  `,
  passwordReset: (token) => `
    <div>
      <h2>Password Reset</h2>
      <p>Click <a href="http://localhost:3000/reset-password?token=${token}">here</a> to reset your password.</p>
    </div>
  `,
};

module.exports = { sendEmail, emailTemplates };