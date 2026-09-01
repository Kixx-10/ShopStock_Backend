import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  phone:string;
  email: string;
  password: string;
  role: "ADMIN" | "CUSTOMER";
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength:1,
      maxLength:50,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      minlength:7,
      maxLength:11,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["ADMIN", "CUSTOMER"],
      default: "CUSTOMER",
    },

  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUser>("User", userSchema);