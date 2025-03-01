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
        DEFAULT: "10px", // Default padding for larger screens
        'sm': '20px',    // Padding for small screens (640px and up)
        'md': '40px',    // Padding for medium screens (768px and up)
        'lg': '60px',    // Padding for large screens (1024px and up)
        'xl': '80px',    // Padding for extra-large screens (1280px and up)
      },
    },
    extend: {
      colors: {
        primary: "#181D27",
        limeGreen:"#6BC33F",
        lightGreen:"#BCFC6A",
        lightGray:"#F7F8F8",
        lightSilver:"#E9EAEB",
        softWhite: "#FAFAFA",
        blueGray:"#252B37",
        lightGrayishWhite:"#F7F8F8",
        davyGray:"#535862",
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
 