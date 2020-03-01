
/* eslint linebreak-style: ["error", "windows"] */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const plantEntrySchema = new Schema({
  region: {
    type: String,
    required: true,
  },
  description: String,
  image: String,
  plantDate: {
    required: true,
    type: Date,
  },
}, {
  timestamps: true,
});

const PlantEntry = mongoose.model('PlantEntry', plantEntrySchema);

module.exports = PlantEntry;
