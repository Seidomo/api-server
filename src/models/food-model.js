'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
});

const FoodModel = mongoose.model('food', foodSchema);

module.exports = FoodModel;