/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'teal-light' : '#1898A0',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      colors: {
        'main': '#020617D9',
        'secondery': '#020617b3',
        'teal-light' : '#1898A0',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        'lightgary': '#0206171f',
        'teal-light' : '#1898A0',
      },
      borderRadius: {
        'primary': '200px',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://flexy-react-stylish.netlify.app/static/media/welcome-bg-2x-svg.1a6f8633cfc91c3b1094170b427d90ef.svg')",
      },
    },
  },
  plugins: [],
};
