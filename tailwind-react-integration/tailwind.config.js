/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Paths where Tailwind should look for class names
  ],
  darkMode: 'class', // Use 'class' or 'media' or set it to 'false'
  theme: {
    extend: {
      // Custom theme settings go here
    },
  },
  plugins: [],
}