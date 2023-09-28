const mongoose = require("mongoose");
const { Schema } = mongoose;

const getqote = new Schema({
  Type:{
        type:String,
        required:true,
      },
  Numberoftanksholds: {
        type: String,
        required: true,
      },
      DWT: {
        type: String,
        required: true,
      },
      Drydock: {
        type: String,
        default: true,
      },
      GRT:{
        type: String,
        default: true,
      },
      Insurance:{
        type: String,
        default: true,
      },
      Year:{
        type: String,
        default: true,
      },
      Quotation:{
        type: String,
        default: true,
      },
      value :{
        type: String,
        default: true,
      },
      Engine_type :{
        type: String,
        default: true,
      },
      Deductible :{
        type: String,
        default: true,
      },
      Engine_kw :{
        type: String,
        default: true,
      },
      Loss_required:{
        type: String,
        default: true,
      },
      Engine_type:{
        type: String,
        default: true,
      },
      Daily_hire : {
        type: String,
        default: true,
      },
      Cargo_gear : {
        type: String,
        default: true,
      },
      Basis :{
        type: String,
        default: true,
      },
      Port_rotation:{
        type: String,
        default: true,
      },
      PI_cover : {
        type: String,
        default: true,
        
      },
      Flag :{
        type: String,
        default: true,
        
      },
      fd_required :{
        type: String,
        default: true,
      },
      Quotation_crew :{
        type: String,
        default: true,
      },
    });
const Getaquote = mongoose.model("mumbai", getqote);
module.exports = Getaquote;