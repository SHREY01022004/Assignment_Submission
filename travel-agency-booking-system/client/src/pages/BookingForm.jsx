import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/api";

const BookingForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ customerName: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/bookings", { ...formData, packageId: id });
    alert("Booking Successful!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e) => setFormData({ ...formData, customerName: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
