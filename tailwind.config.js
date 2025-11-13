/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          dark: '#000001',
          light: '#000100',
          lighter: '#1a1a1a',
        },
        secondary: {
          DEFAULT: '#6101d0',
          dark: '#5900db',
          light: '#5600e0',
        },
        accent: {
          DEFAULT: '#e57b0c',
          dark: '#e5820a',
          light: '#e3780b',
        },
        magenta: {
          DEFAULT: '#810aaa',
        },
        purple: {
          DEFAULT: '#6101d0',
          dark: '#5900db',
          light: '#5600e0',
        },
        orange: {
          DEFAULT: '#e57b0c',
          dark: '#e5820a',
          light: '#e3780b',
        },
        warning: '#e57b0c',
        danger: '#810aaa',
        success: '#6101d0',
      },
      fontFamily: {
        sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      screens: {
        mobile: { max: "640px" },
        tablet: { min: "641px", max: "1023px" },
        laptop: { min: "1024px" },
        Xlaptop: { min: "1440px" },
      },
      borderRadius: {
        '2xl': '1rem',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
};
