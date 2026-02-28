import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contacts.js";
import sosRoutes from "./routes/sos.js";
import areaRoutes from "./routes/areas.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/sos", sosRoutes);
app.use("/api/areas", areaRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});