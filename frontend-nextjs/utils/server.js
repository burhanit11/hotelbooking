// export const server = "http://localhost:5000/api/v1";

export const server =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/v1"
    : "https://solarbazarbackend.vercel.app/api/v1";
