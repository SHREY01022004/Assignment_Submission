import Package from "../models/Package.js";

export const getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addPackage = async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.json(newPackage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
