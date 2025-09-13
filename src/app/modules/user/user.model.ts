import { Schema, model } from "mongoose";
import { Isactive, IUser, Role, IAuthProvider } from "./user.interface";

// Define authProviderSchema correctly
export const authProviderSchema = new Schema<IAuthProvider>({
  provider: { type: String, required: true },
  providerId: { type: String, required: true }
}, {
  _id: false, // if you don't want _id in subdocument
  versionKey: false
});

// Define user schema
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: {
    type: String,
    enum: Object.values(Role),
    default: Role.USER
  },
  phone: { type: String },
  picture: { type: String },
  address: { type: String },
  isDeleted: { type: Boolean, default: false }, // typo fixed
  isActive: {
    type: String,
    enum: Object.values(Isactive)
  },
  isVerified: { type: Boolean, default: false }, // fixed type
  auths: [authProviderSchema] // corrected subdocument array syntax
}, {
  timestamps: true,
  versionKey: false
});

export const User = model<IUser>("User", userSchema);
