const CropPrice = require('../models/CropPrice');
const cropPrices = require('./price');
const { getPrices } = require('./price');

const mongoose = require('mongoose');
const url = "mongodb+srv://amit_123:962721@cluster0.u8hzvws.mongodb.net/price";

(async () => {
    try {
        await mongoose.connect(url, {
            user:"amit_123",
            pass:"962721",
            dbName:"price"
        });;
    } catch (error) {
        console.log(error);
    }
})();

const initCropPrices = async () => {
  try {
    await CropPrice.insertMany(cropPrices);
    console.log('Crop prices initialized successfully');
  } catch (error) {
    console.error('Error initializing crop prices:', error);
  }
};

initCropPrices();

