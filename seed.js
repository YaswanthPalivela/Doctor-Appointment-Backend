import  mongoose from  "mongoose";
import doctor from "./models/Doctor.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seedDoctors = [
  {
    name: "Dr. Alice Morgan",
    specialization: "Cardiologist",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    availability: "Available Today",
    schedule: [
      "Monday 9AM - 1PM",
      "Wednesday 2PM - 5PM",
      "Friday 10AM - 3PM"
    ]
  },
  {
    name: "Dr. John Patel",
    specialization: "Dermatologist",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    availability: "Fully Booked",
    schedule: [
      "Tuesday 11AM - 3PM",
      "Thursday 9AM - 12PM"
    ]
  },
  {
    name: "Dr. Emily Zhang",
    specialization: "Pediatrician",
    profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
    availability: "On Leave",
    schedule: [
      "Wednesday 8AM - 12PM",
      "Friday 1PM - 4PM"
    ]
  }
];

async function seedDB() {
  await doctor.deleteMany({});
  await doctor.insertMany(seedDoctors);
  console.log("Database seeded with sample doctors!");
  mongoose.connection.close();
}

seedDB();
