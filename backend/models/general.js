const mongoose = require("mongoose");
const { Schema } = mongoose;

const general = new Schema({
    Firstname:{
    type:String,
    required:true,
  },
  Lastname: {
    type: String,
    required: true,
  },
  Tittle: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: true,
  },
  company:{
    type: String,
    default: true,
  },
  Address:{
    type: String,
    default: true,
  }

});
const generalenquiry = mongoose.model("bridge", general);
module.exports = generalenquiry;

