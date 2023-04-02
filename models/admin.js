import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    requierd: true,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
});
export default mongoose.model("Admin", adminSchema);
