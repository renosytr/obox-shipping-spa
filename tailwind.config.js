/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [    
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "black": "202224",
          "primary": "#4880FF",
          "secondary": "#8280FF",
          "base-100": "#F5F6FA",
          "success": "#4AD991",
          "warning": "#FEC53D",
          "error": "#FF0000",
        },
      }
    ],
  },
}

