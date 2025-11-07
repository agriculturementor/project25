const mongoose = require('mongoose');
const { Schema } = mongoose;



const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 18,
    max: 80
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"]
  },
  village: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  crops: {
    type: [String],
    required: true
  },
  landArea: {
    type: Number,
    required: true
  },
  contact: {
    phone: { type: String },
    email: { type: String }
  },
  image: {
    type:String,
     
     default: "https://images.pexels.com/photos/20238486/pexels-photo-20238486.jpeg?_gl=1*z8xnet*_ga*OTQ0OTQxMjcxLjE3NjI0NjU4Nzk.*_ga_8JE65Q40S6*czE3NjI0NjU4NzkkbzEkZzAkdDE3NjI0NjU4NzkkajYwJGwwJGgw",
set:(v) =>
     v==="" ? "https://images.pexels.com/photos/20238486/pexels-photo-20238486.jpeg?_gl=1*z8xnet*_ga*OTQ0OTQxMjcxLjE3NjI0NjU4Nzk.*_ga_8JE65Q40S6*czE3NjI0NjU4NzkkbzEkZzAkdDE3NjI0NjU4NzkkajYwJGwwJGgw"
 :v,   
    
  },
  
  joinDate: {
    type: Date,
    default: Date.now
  }
});

const Farmer = mongoose.model("Farmer", farmerSchema);
module.exports = Farmer;
