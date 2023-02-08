/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'inter': ["'Inter', sans-serif"]
    },
    extend: {
      colors: {
        skyBlue: '#8ecae6',
        prussianBlue: '#023047',
        Yellow: '#ffb703',
        orange: '#fb8500',
      }
    },
  },
  plugins: [],
}
