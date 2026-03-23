import express from "express";
import Incident from "../models/Incident.js";

const router = express.Router();

// ✅ Create new incident
router.post("/report", async (req, res) => {
  try {
    const { lat, lng, description, type, media } = req.body;

    const newIncident = new Incident({
      location: { lat, lng },
      description,
      type,
      media,
    });

    await newIncident.save();

    res.status(201).json({ message: "Incident reported successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error reporting incident" });
  }
});

// ✅ Get all incidents
router.get("/", async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.json(incidents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching incidents" });
  }
});

export default router;