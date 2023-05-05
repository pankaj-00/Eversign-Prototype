import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  sign: {
    type: String,
    required: true,
  },
  expiresOn: {
    type: Number,
    required: true,
  },
});

export const User = mongoose.model("Sign", userSchema, "Sign");
