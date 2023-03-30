/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'lelie-blue': '#002147',
      },
      fontFamily: {
        grotesk: ["Space Grotesk"]
      }
    },
  },
  plugins: [],
}
