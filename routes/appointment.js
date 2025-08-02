import express from "express";
import appointment from "../models/Appointment.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { patientName, email, dateTime, doctorId } = req.body;

  try {
    const parsedTime = new Date(dateTime);

    const conflict = await appointment.findOne({
      doctorId,
      dateTime: parsedTime,
    });

    if (conflict) {
      return res.status(409).json({ message: "Time slot already booked." });
    }

    const newAppt = new appointment({
      patientName,
      email,
      dateTime: parsedTime,
      doctorId,
    });
    await newAppt.save();
    res.status(201).json({ message: "Appointment created!" });
  } catch (err) {
    res.status(500).json({ message: "Error booking appointment", error: err });
  }
});

export default router;