const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating aschema

const MarioCharSchema = new Schema({
  name:String,
  weight:Number
})
//
const MarioChar = mongoose.model('mariochar',MarioCharSchema);

module.exports = MarioChar;
