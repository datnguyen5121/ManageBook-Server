import { Schema } from "mongoose";
import mongoose from "mongoose";

const bookSchema = new Schema(
  {
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    datePublish: { type: String, required: true },
    pageNumber: { type: Number, required: true },
    category: { type: String, required: true },
    imgUrl: { type: String },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);
bookSchema.index({ title: "text" });

// bookSchema.index({ "$**": "text" }); // này là tìm tất cả
export default mongoose.model("Book", bookSchema);
