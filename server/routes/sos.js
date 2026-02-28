import express from "express";

const router = express.Router();

router.post("/trigger", (req, res) => {
  res.json({ message: "SOS triggered" });
});

export default router;