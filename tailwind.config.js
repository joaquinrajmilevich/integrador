/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3xl": "3px 3px 25px -5px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        "dark-primary": "#2C3E50",
        "blue-secondary": "#3093fc",
        "green-secondary": "#70bf44",
        "orange-secondary": "#F39C12",
        "lgray-neutral": "#F5F5F5",
        "dgray-neutral": "#333333",
        "blue-accent": "#306dfc",
        "green-accent": "#69b340",
      },
    },
  },
  plugins: [require("daisyui")],
};
