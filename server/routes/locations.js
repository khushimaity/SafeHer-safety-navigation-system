import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "kerala_locations.json");
    const data = fs.readFileSync(filePath, "utf-8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading kerala_locations.json:", error);
    res.status(500).json({ error: "Failed to load locations" });
  }
});

export default router;