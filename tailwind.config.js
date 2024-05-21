/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      abs: {
        white: "#ffffff",
        black: "#000000",
        dark: "#191622",
      },
      blur: {
        purple: "#C5A5F5",
        peach: "#F8C9A4",
      },
      white: {
        90: "#E4E4E7",
        95: "#F1F1F3",
        97: "#F7F7F8",
        99: "#FCFCFD",
      },
      primary: {
        50: "#e2f2ff",
        100: "#b9ddff",
        200: "#8ac8ff",
        300: "#56b2ff",
        400: "#25a1ff",
        500: "#0091ff",
        600: "#0083f8",
        700: "#0070e4",
        800: "#005fd2",
        900: "#0b3eb3",
      },
      success: {
        50: "#ECFDF5",
        100: "#D1FAE5",
        200: "#A7F3D0",
        300: "#6EE7B7",
        400: "#34D399",
        500: "#10B981",
        600: "#059669",
        700: "#047857",
        800: "#065F46",
        900: "#064E3B",
      },
      warning: {
        50: "#FEF2F2",
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F87171",
        500: "#EF4444",
        600: "#DC2626",
        700: "#B91C1C",
        800: "#991B1B",
        900: "#7F1D1D",
      },
      neutral: {
        15: "#262626",
        40: "#656567",
        50: "#F1F2F4",
        100: "#F0F1F5",
        200: "#E9EAF0",
        300: "#CCCED9",
        400: "#AEB1BF",
        500: "#9295A6",
        600: "#6C7080",
        700: "#545766",
        800: "#232530",
        900: "#2B3144",
      },
    },
    extend: {
      borderRadius: {
        reg: "10px",
      },
      animation: {
        "spin-slow": "spin 4s ease-in infinite",
      },
    },
  },
  plugins: [],
};

