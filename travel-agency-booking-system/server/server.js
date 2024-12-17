import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // To load environment variables
import cors from "cors"; // To handle Cross-Origin Resource Sharing
import Package from "./models/Package.js"; // Import the Package model

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // To parse incoming JSON requests
app.use(cors({ origin: "http://localhost:5173" })); // Enable CORS for frontend on localhost:5173 (Vite default port)

// MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Route to get all packages
app.get("/api/packages", async (req, res) => {
  try {
    const packages = await Package.find(); // Fetch all packages from MongoDB
    res.json(packages); // Return the packages as JSON
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch packages" });
  }
});

// Route to add a new package
app.post("/api/packages", async (req, res) => {
  const { title, description, price } = req.body;

  // Validate input
  if (!title || !description || !price) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Create a new package
  const newPackage = new Package({
    title,
    description,
    price,
  });

  try {
    await newPackage.save(); // Save the new package to MongoDB
    res.status(201).json(newPackage); // Return the created package
  } catch (error) {
    res.status(500).json({ message: "Failed to add package" });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
