import mongoose from "mongoose";

const connectMongo = async (url: string | undefined) => {
  try {
    if (!url) {
      throw new Error("url is not defined");
    }
    await mongoose.connect(url);
    console.log("mongoDB is connected...");
  } catch (error) {
    console.log(error);
  }
};
mongoose.set("strictQuery", false);
export default connectMongo;