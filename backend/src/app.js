import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import staffRoutes from "./routes/staff.routes.js";
import hotelRoutes from "./routes/hotel.routes.js";
import bookingRoutes from "./routes/booking.routes.js";

const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  Credential: true,
};

// middlewares
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));
app.use(cors(corsOptions));
app.use(cookieParser());

// apis
app.use("/api/v1/staff", staffRoutes);
app.use("/api/v1/hotel", hotelRoutes);
app.use("/api/v1/booking", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Backend is live! 🎉");
});

export { app };
