const mongoose = require("mongoose");
const { Schema } = mongoose;

const Details = new Schema({
  Name:{
    type:String,
    required:true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    default: true,
  },
});
const contact = mongoose.model("bridgemumbai", Details);
module.exports = contact;
``