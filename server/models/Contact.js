import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  relation: String,
  phone: String,
  status: {
    type: String,
    default: "active",
  },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;