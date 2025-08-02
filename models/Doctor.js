import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  profileImage: String,
  experience: Number,
  availability: String,
  contactNumber: String,
  schedule: [String],
});

const doctor = mongoose.model("doctor", doctorSchema);

export default doctor;
