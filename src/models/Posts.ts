import mongoose, { Schema } from "mongoose";
import { Posts } from "types/PostsTypes";

const PostsSchema: Schema = new Schema<Posts>(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    content: {
      type: String
    },
    featureImage: {
      type: String
    },
    author: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const PostsModel = mongoose.model<Posts>("Posts", PostsSchema);
