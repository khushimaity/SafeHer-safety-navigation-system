import express from "express";
import AreaReport from "../models/AreaReport.js";
import jwt from "jsonwebtoken";

const router = express.Router();

/* Auth Middleware */
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

/* Add Area Report */
router.post("/", authMiddleware, async (req, res) => {
  const { latitude, longitude, address, rating, review, imageUrl } = req.body;

  const report = await AreaReport.create({
    userId: req.userId,
    latitude,
    longitude,
    address,
    rating,
    review,
    imageUrl,
  });

  res.json(report);
});

/* Get Reports */
router.get("/", async (req, res) => {
  const reports = await AreaReport.find();
  res.json(reports);
});

export default router;