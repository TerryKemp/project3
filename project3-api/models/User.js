const mongoose = require("../db/connection");

const User = new mongoose.Schema({
  Username: String,
  Email: String,
  Password: String,
  "Favorite-Cities": [
    {
      type: Schema.Types.ObjectId,
      ref: "MyCities"
    }
  ]
});

mongoose.model("User", User);

module.exports = mongoose;
