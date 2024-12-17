import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  availableDates: [String],
  image: String,
});

export default mongoose.model("Package", PackageSchema);
