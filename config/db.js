import mongoose, { connect } from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //   if database is connected, dont connect again
  if (connected) {
    console.log("Database Already Connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    connected = true;
    console.log("Mongodb Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
