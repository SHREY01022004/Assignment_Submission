import express from "express";
import { bookTour } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", bookTour);

export default router;
