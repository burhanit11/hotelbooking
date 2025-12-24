import { Hotel } from "../models/hotel.model.js";

export const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      success: true,
      message: "Hotel fetched successfully",
      data: hotels,
    });
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
};
