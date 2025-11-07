const mongoose = require("mongoose");
const farmers = require("./farmerschema.js");
const Schema = mongoose.Schema;
const mentorSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true
  },
  expertise: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },

  photo: {
    type:String,
     
     default: "https://images.pexels.com/photos/20238486/pexels-photo-20238486.jpeg?_gl=1*z8xnet*_ga*OTQ0OTQxMjcxLjE3NjI0NjU4Nzk.*_ga_8JE65Q40S6*czE3NjI0NjU4NzkkbzEkZzAkdDE3NjI0NjU4NzkkajYwJGwwJGgw",
set:(v) =>
     v==="" ? "https://images.pexels.com/photos/20238486/pexels-photo-20238486.jpeg?_gl=1*z8xnet*_ga*OTQ0OTQxMjcxLjE3NjI0NjU4Nzk.*_ga_8JE65Q40S6*czE3NjI0NjU4NzkkbzEkZzAkdDE3NjI0NjU4NzkkajYwJGwwJGgw"
 :v,   
    
  },
  rating: {
    type: Number,
    default: 0
  },
  contact: {
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
      }
  },
  availability: {
  type: String,
  enum: ["Online", "Offline", "Both"],
  default: "Online"
},
Farmer: [
     {
        type: Schema.Types.ObjectId,
        ref:"farmers",
     },
    ],

});

const Mentor = mongoose.model("Mentor", mentorSchema);
module.exports = Mentor;

