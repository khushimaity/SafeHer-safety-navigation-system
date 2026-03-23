import mongoose from "mongoose";

const IncidentSchema = new mongoose.Schema({
  location: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["safe", "moderate", "unsafe"],
    required: true,
  },
  media: {
    type: String, // URL of image/video
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Incident = mongoose.model("Incident", IncidentSchema);

export default Incident;