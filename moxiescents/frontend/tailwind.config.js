/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bush: "#e7ddcf",
        punga: "#593717",
        clay: "#935c39",
        driftwood: "#b08059"
      },
    },
  },
  plugins: [],
}
