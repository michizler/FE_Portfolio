import mongoose from "mongoose";

// Blog Schema
const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    publishDate: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const BlogPost = mongoose.model("BlogPost", BlogSchema);
