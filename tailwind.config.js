/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,tsx,jsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/*.{js,ts,tsx,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'im-blue': '#0070f3',
      },
    },
  },
  plugins: [],
};
