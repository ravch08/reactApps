/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#bfa888",
      darkBlue: "#021527",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Cormorant Upright", "serif"],
      monospace: ["Inconsolata", "monospace"],
    },
  },
};
export const plugins = [];
