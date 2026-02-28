import mongoose from "mongoose";

const areaReportSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  latitude: Number,
  longitude: Number,
  address: String,
  rating: {
    type: String,
    enum: ["safe", "moderate", "unsafe"],
  },
  review: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AreaReport = mongoose.model("AreaReport", areaReportSchema);

export default AreaReport;