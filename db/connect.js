const mongoose = require("mongoose");

uri = "mongodb+srv://VipulTiwari:Ry46b8V4H@vipulcluster.ilpkqys.mongodb.net/vipulcluster?retryWrites=true&w=majority";


const connectDB = (uri) => {
  // console.log("connect db");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
