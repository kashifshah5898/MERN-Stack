const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("Connecting to............");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
