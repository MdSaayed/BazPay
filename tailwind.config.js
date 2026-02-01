/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Added jsx support
  ],
  theme: {
    container: {
      center: true, // Centers the container
      padding: {
        DEFAULT: "20px", // Default padding for larger screens
        'md': '30px',    // Padding for medium screens (768px and up)
        'lg': '40px',    // Padding for large screens (1024px and up)
        'xl': '80px',    // Padding for extra-large screens (1280px and up)
      },
    },
    extend: {
      colors: {
        primary: "#181D27",
        limeGreen:"#6BC33F",
        lightGreen:"#BCFC6A", 
        lightSilver:"#E9EAEB",
        softWhite: "#FAFAFA",
        blueGray:"#252B37",
        lightGrayishWhite:"#F7F8F8",
        davyGray:"#535862",
        lightLavender: '#F0EEF4',
        whiteSmoke: '#F5F5F5',
        paleGreen:'#ECFFCD',
        mintCream:'#FBFEF7',
        coolGray:'#A4A7AE',
        lightAloe:'#F8FFEE',
        linenWhite:'#FFFFFB',
        eerieBlack:'#1B1B1B',
        darkGray:'#404040',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        "2xl": "1440px", // Force container max-width to 1440px
      },
      maxWidth: {
        container: "1440px", // Custom container max-width
      },
    },
  },
  plugins: [],
};
 