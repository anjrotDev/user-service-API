import mongoose, { Schema } from "mongoose";
import { User } from "types/UsersTypes";

const UserSchema: Schema = new Schema<User>(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const UserModel = mongoose.model<User>("User", UserSchema);
