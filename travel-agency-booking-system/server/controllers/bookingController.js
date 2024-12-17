import Booking from "../models/Booking.js";

export const bookTour = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.json(newBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
