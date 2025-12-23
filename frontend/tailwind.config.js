export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // include ts/tsx if needed
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f8f6a",
        secondary: "#e9f0ec",
        bgColor: "#f6f6f5",
        customGray: "#202020ff" // renamed to avoid conflicts with Tailwind gray
      },
    },
  },
  plugins: [],
}
