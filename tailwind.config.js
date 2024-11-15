/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Rajdhai: ["Rajdhani", "sans-serif"],
      },
      fontSize: {
        xlx: "0.625rem",
        xxs: "0.750",
        xsx: "0.550rem",
      },
      width: {
        84: "21rem",
        86: "21.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
