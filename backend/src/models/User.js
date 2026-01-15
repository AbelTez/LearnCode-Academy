import mongoose from "mongoose";
import crypto from "crypto";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.statics.hashPassword = function (pwd) {
  return crypto.createHash("sha256").update(pwd).digest("hex");
};

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
