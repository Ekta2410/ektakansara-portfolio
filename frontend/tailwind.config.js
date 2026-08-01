/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],

  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        surface: "#111827",
        surfaceLight: "#1E293B",

        primary: "#2563EB",
        primaryLight: "#3B82F6",

        text: "#F8FAFC",
        textSoft: "#CBD5E1",
        muted: "#94A3B8",

        border: "#334155",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        card: "0 20px 40px rgba(0,0,0,.25)",
      },

      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(.22,1,.36,1)",
      },
    },
  },

  plugins: [],
};