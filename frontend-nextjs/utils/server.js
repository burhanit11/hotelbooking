// export const server = "http://localhost:5000/api/v1";

export const server =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/v1"
    : "https://hotelbooking-backend-nine-green.vercel.app/api/v1";
