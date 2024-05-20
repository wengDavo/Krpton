/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      success: "#58BD7D",
      ghost: "#F1F3F2",
      primary: "#EF443B",
      secondary: "#FF6F00",
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
      grey: {
        10: "#1A1A1A",
        15: "#262626",
        20: "#333333",
        30: "#4C4C4D",
        35: "#59595A",
        40: "#656567",
        60: "#98989A",
        70: "#B3B3B3",
      },
    },
    extend: {
      borderRadius: {
        reg: "10px",
      },
      animation:{
        'spin-slow': 'spin 4s ease-in infinite',
      }
    },
  },
  plugins: [],
};

