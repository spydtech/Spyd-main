/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'], // Specific combo for headings
        body: ['Roboto', 'Source Sans Pro', 'sans-serif'], // Specific combo for body
        sans: ['Cambo', 'serif'], // Sans font as default fallback
      },
    },
  },
  plugins: [],
};
