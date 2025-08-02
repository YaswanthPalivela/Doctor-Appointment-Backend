import express from "express";
import doctor from "../models/Doctor.js";

const router = express.Router();

// GET /api/doctors
router.get("/", async (req, res) => {
  const doctors = await doctor.find();
  res.status(200).json(doctors);
});

// GET /api/doctors/:id
router.get("/:id", async (req, res) => {
  const singleDoctor = await doctor.findById(req.params.id);
  res.status(200).json(singleDoctor);
});

export default router;
