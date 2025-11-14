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
          DEFAULT: '#1a4558',
          dark: '#0f2d3e',
          light: '#2d6b84',
          lighter: '#3d7f99',
        },
        secondary: {
          DEFAULT: '#566e77',
          dark: '#3d505a',
          light: '#6d8592',
        },
        accent: {
          DEFAULT: '#3d7f99',
          dark: '#2d6b84',
          light: '#5a9fb8',
        },
        teal: {
          DEFAULT: '#1a4558',
          dark: '#0f2d3e',
          light: '#2d6b84',
          lighter: '#3d7f99',
          50: '#f0f6f9',
          100: '#d9eaf2',
          200: '#a8d4e6',
        },
        slate: {
          DEFAULT: '#566e77',
          dark: '#3d505a',
          light: '#6d8592',
          50: '#f5f7f8',
          100: '#e8ecef',
        },
        info: {
          DEFAULT: '#5a9fb8',
        },
        warning: '#7fa3ae',
        danger: '#4d6872',
        success: '#2d6b84',
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
