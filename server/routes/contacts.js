import express from "express";
import Contact from "../models/Contact.js";
import jwt from "jsonwebtoken";

const router = express.Router();

/* Middleware to get user from token */
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

/* ADD CONTACT */
router.post("/", authMiddleware, async (req, res) => {
  const { name, relation, phone } = req.body;

  const contact = await Contact.create({
    userId: req.userId,
    name,
    relation,
    phone,
  });

  res.json(contact);
});

/* GET CONTACTS */
router.get("/", authMiddleware, async (req, res) => {
  const contacts = await Contact.find({ userId: req.userId });
  res.json(contacts);
});

export default router;