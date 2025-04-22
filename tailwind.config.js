// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#213a77",
        testPink: "#ff00ff",
        secondary: "#fcb900",
        whatsapp: "#25D366",
        background: "#f5f5f5",
        brandBlack: "#000000",
        brandWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
