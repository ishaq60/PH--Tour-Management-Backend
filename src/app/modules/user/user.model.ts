import { Schema, model } from "mongoose";
import { Isactive, IUser, Role, IAuthProvider } from "./user.interface";


export const authProviderSchema = new Schema<IAuthProvider>({
  provider: { type: String, required: true },
  providerId: { type: String, required: true }
}, {
  _id: false, 
  versionKey: false
});


const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: {
    type: String,
    enum: Object.values(Role),
    default: Role.USER
  },
   phonenumber: { type: String },
  picture: { type: String },
  address: { type: String },
  isDeleted: { type: Boolean, default: false }, 
  isActive: {
    type: String,
    enum: Object.values(Isactive)
  },
  isVerified: { type: Boolean, default: false }, 
  auths: [authProviderSchema] 
}, {
  timestamps: true,
  versionKey: false
});

export const User = model<IUser>("User", userSchema);
