import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  phone: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Staff = mongoose.model("Staff", staffSchema);
