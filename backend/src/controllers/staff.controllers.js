import { Staff } from "../models/staff.model.js";
import { ApiError } from "../utils/ApiError.js";

// GET all staff
export const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json({
      success: true,
      message: "Staff fetched successfully",
      data: staff,
    });
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
};
