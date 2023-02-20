import { Schema } from "mongoose";
import mongoose from "mongoose";

const cartSchema = new Schema(
  {
    email: { type: String, required: true, ref: "users" },
    bookId: { type: String, required: true },
    quantity: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Cart", cartSchema);
