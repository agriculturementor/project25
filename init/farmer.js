const farmer = require('../models/farmerschema.js');

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
 
 


