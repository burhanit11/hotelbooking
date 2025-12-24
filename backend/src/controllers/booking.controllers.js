import { Booking } from "../models/booking.model.js";
import { ApiError } from "../utils/ApiError.js";

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      selectType,
      selectRoom,
      checkIn,
      checkOut,
      message,
    } = req.body;

    // Simple validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !selectType ||
      !selectRoom ||
      !checkIn ||
      !checkOut
    ) {
      throw new ApiError(400, "Please fill all required fields");
    }

    const newBooking = new Booking({
      firstName,
      lastName,
      email,
      phoneNumber,
      selectType,
      selectRoom,
      checkIn,
      checkOut,
      message,
    });

    const savedBooking = await newBooking.save(); // ✅ SAVE

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: savedBooking,
    });
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
};
