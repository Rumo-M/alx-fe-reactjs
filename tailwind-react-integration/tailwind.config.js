/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Specify where Tailwind should look for class names
  ],
  darkMode: 'class', // Can also be 'media' or false
  theme: {
    extend: {
      // Customize your theme here
    },
  },
  plugins: [],
}