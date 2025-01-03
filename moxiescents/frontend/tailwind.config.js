/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/React files in `src`
    "./components/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/React files in `components`
  ],
  theme: {
    extend: {
      colors: {
        bush: "#e7ddcf",
        punga: "#593717",
        clay: "#935c39",
        driftwood: "#b08059",
      },
      fontFamily: {
        verdana: ['Verdana', 'Geneva', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
