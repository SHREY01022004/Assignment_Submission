import express from "express";
import { getPackages, addPackage } from "../controllers/packageController.js";

const router = express.Router();

router.get("/", getPackages);
router.post("/", addPackage);

import Package from "../models/packageModel.js"; // Import your Package model

// POST route to add a new tour package
router.post("/", async (req, res) => {
  try {
    const { name, description, price } = req.body;

    // Validation
    if (!name || !description || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new package
    const newPackage = new Package({
      name,
      description,
      price,
    });

    const savedPackage = await newPackage.save();
    res.status(201).json(savedPackage); // Send back the created package
  } catch (error) {
    console.error("Error creating package:", error.message);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

export default router;
