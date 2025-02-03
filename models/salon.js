const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  services: [{ type: String }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Salon', salonSchema);