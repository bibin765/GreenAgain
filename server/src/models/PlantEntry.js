
/* eslint linebreak-style: ["error", "windows"] */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const requiredNumber = {
  type: Number,
  required: true,
};

const plantEntrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  description: String,
  image: String,
  plantDate: {
    required: true,
    type: Date,
  },
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90,
  },
  longitude: {
    ...requiredNumber,
    min: -180,
    max: 180,
  },
}, {
  timestamps: true,
});

const PlantEntry = mongoose.model('PlantEntry', plantEntrySchema);

module.exports = PlantEntry;
