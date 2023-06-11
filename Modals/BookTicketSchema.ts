import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    startPoint: {
      type: String,
    },
    endPoint: {
      type: String,
    },
    planNo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", BookSchema);
