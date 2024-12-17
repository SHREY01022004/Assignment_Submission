import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  phone: String,
  travelers: Number,
  specialRequests: String,
  packageId: String,
  price: Number,
});

export default mongoose.model("Booking", BookingSchema);
