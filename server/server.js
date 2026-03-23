import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contacts.js";
import sosRoutes from "./routes/sos.js";
import areaRoutes from "./routes/areas.js";
import incidentRoutes from "./routes/incidentRoutes.js";
import locationRoutes from "./routes/locations.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/sos", sosRoutes);
app.use("/api/areas", areaRoutes);
app.use("/api/incidents", incidentRoutes);
app.use("/api/locations", locationRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});