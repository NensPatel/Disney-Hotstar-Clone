/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#0A0A23",
      },
    },
  },
  plugins: [require("tailwindcss-no-scrollbar")],
};
