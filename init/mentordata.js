const Mentor = require('../models/mentorschema');

const mentordata = require('./mentor');

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

const initmentor = async () => {
  try {
    await Mentor.insertMany(mentordata);
    console.log('Mentor data initialized successfully');
  } catch (error) {
    console.error('Error initializing mentor data:', error);
  }
};

    initmentor();
