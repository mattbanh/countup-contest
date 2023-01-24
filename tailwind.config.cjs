/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vcdred: "#AF2024",
        vcdblack: "#241F21",
      },
    },
  },
  plugins: [],
};
