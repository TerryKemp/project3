const mongoose = require("./models");
const User = mongoose.model("User");
const { CLIENT_URL } = require("./weather-data.js");

axios
  .get(CLIENT_URL, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
  .then(res => {
    console.log(res.data);
    this.setState({ uvNum: res.data });
  });

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
