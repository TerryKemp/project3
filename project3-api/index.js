const express = require("express");
const mongoose = require("./db/models");
const City = mongoose.model("City");
const passport = require("./config/passport")();
const config = require("./config/config");
const User = mongoose.model("User");
const app = express();

app.set("port", process.env.PORT || 3001);
