/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "",
        "secondary-color": "",
        "third-color": "#7332a8"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}