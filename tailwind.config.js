/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImage:
          "url('./src/assets/Coffee.jpg')",
      },
    },
  },
  plugins: [daisyui],
};
