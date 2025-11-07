// models/CropPrice.js

const mongoose = require('mongoose');

const cropPriceSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
    trim: true
  },
  district: {
    type: String,
    required: true,
    trim: true
  },
  mandi: {
    type: String,
    required: true,
    trim: true
  },
  crop: {
    type: String,
    required: true,
    trim: true
  },
  unit: {
    type: String,
    enum: ['Kg', 'Quintal', 'Dozen', 'Stem', 'Ton', 'Bag'],
    required: true
  },
  minPrice: {
    type: Number,
    required: true,
    min: 0
  },
  maxPrice: {
    type: Number,
    required: true,
    min: 0
  },
  avgPrice: {
    type: Number,
    required: true,
    min: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  source: {
    type: String,
    default: 'Government Agri Market Portal'
  }
}, {
  timestamps: true // Automatically adds createdAt & updatedAt
});

// Index for faster queries by region or crop
cropPriceSchema.index({ state: 1, district: 1, crop: 1 });

module.exports = mongoose.model('CropPrice', cropPriceSchema);
