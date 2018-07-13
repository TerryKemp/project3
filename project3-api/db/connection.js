const mongoose = require('mongoose')
const url = 'mongodb://admin:sunburn1@ds133041.mlab.com:33041/heir-pollution'
const url2 = process.env.MONGOLAB_URI


if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/heir-pollution')
}

export MONGOLAB_URI = url

//'mongodb://admin:sunburn1@ds133041.mlab.com:33041/heir-pollution'

// module.exports = mongoose
