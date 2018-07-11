const express = require("express");
const mongoose = require("./db/models");
const City = mongoose.model("City");
const passport = require("./config/passport")();
const config = require("./config/config");
const User = mongoose.model("User");
const app = express();

app.use(require("./routes/index.js"));
