import express from "express";
import { getStaff } from "../controllers/staff.controllers.js";

const router = express.Router();

router.get("/", getStaff);

export default router;
