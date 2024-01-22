/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f0f2f1ff',
        'blue1':"#6c9bc4ff",
        'green1':"#98d9c5ff"
      },
    },
  },
  plugins: [],
}