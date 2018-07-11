const mongoose = require("./models");
const User = mongoose.model("User");
const weatherData = require("./weather-data.js");

User.remove({})
  .then(() => {
    User.collection.insert(userData).then(user => {
      console.log(user);
      process.exit();
    });
  })
  .catch(err => {
    console.log(err);
  });

City.remove({})
  .then(() => {
    City.collection.insert(weatherData).then(weather => {
      console.log(weather);
      process.exit();
    });
  })
  .catch(err => {
    console.log(err);
  });
