const mongoose = require("mongoose");
const { URL } = require("../constants");
//127.0.0.1

async function dbConnect() {
  await mongoose.connect(URL);
}

module.exports = dbConnect;
