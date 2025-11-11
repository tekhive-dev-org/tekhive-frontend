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
          main: '#0066FF',
        },
        secondary: {
          main: '#525866',
        },
      },
      fontFamily: {
        sans: ['Lato', 'Arial', 'sans-serif'],
      },
      screens: {
        mobile: { max: "640px" },
        tablet: { min: "641px", max: "1023px" },
        laptop: { min: "1024px" },
        Xlaptop: { min: "1440px" },
      },
    },
  },
  plugins: [],
};
