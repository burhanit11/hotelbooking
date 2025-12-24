import express from "express";
import { getHotels } from "../controllers/hotel.controllers.js";

const router = express.Router();

router.get("/", getHotels);

export default router;
