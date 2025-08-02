import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  email: { type: String, required: true },
  dateTime: { type: Date, required: true },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
});

const appointment = mongoose.model("Appointment", appointmentSchema);
export default appointment;
