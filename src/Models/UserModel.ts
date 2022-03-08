import { model, Schema } from "mongoose";
import { v4 } from "uuid";

//the interface for a user
export interface IUser {
  _id: string;
  email: string;
  hashedPassword: string;
  username: string;
}

//the user schema
const UserSchema = new Schema<IUser>({
  _id: {
    default: v4,
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
});

//the user model
export const UserModel = model("user", UserSchema);
