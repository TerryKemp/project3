const mongoose = require("../db/connection");

const City = new mongoose.Schema({
  City: String,
  Country: String,
  Lat: Number,
  Long: Number,
  "UV-Index": Number,
  "AQ-Index": Number
});

mongoose.model("City", City);

module.exports = mongoose;
