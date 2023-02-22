import { Schema } from "mongoose";
import mongoose from "mongoose";

const cartSchema = new Schema(
  {
    email: { type: String, required: true, ref: "User" },
    bookId: { type: String, required: true, ref: "Book" },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Cart", cartSchema);
