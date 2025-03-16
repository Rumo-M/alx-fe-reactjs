/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Paths to files with class names
  ],
  darkMode: 'class', // Or 'media' or 'false'
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [
    // Your Tailwind plugins here, if needed
  ],
}