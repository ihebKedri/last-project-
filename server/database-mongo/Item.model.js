const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.set('strictQuery', false)
const watchSchema = new mongoose.Schema({
  name:String,
  price:String,
  description: String,
  quantity: String,
  quality:String ,
  image:String
});

const watch = mongoose.model("watch", watchSchema);

module.exports = watch;