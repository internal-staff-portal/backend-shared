import { model, Schema } from "mongoose";
import { v4 } from "uuid";

//a short interface of a user
export interface IShortUser {
  _id: string;
  email: string;
  username: string;
}

//the interface for a user
export interface IUser extends IShortUser {
  active: boolean;
  hashedPassword: string;
}

//the user schema
const UserSchema = new Schema<IUser>({
  _id: {
    default: v4,
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
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
