/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        ilusion:{
          body: "#d3d3d3",
          header: "#344152"
        }
      }
    },
  },
  plugins: [],
}
