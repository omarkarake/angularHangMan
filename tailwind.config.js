/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        mouseMemoirs: ["MouseMemoirs", "sans-serif"],
      },
      colors: {
        cinder: "#0B0D17",
        blue: "#2463FF",
        white: "#FFFFFF",
        darkNavy: "#261676",
      },
      fontSize: {
        'heading-xl': ['136px', '120%'],
        'heading-l': ['88px', '120%'],
        'heading-m': ['48px', '120%'],
        'heading-s': ['32px', '120%'],
        'body': ['26px', '120%'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #130556 0%, #000000 100%)',
        'pink-gradient': 'linear-gradient(to bottom, #FE71FE 0%, #7199FF 100%)',
      },
      backgroundColor: {
        'white-opacity-20': 'rgba(255, 255, 255, 0.2)',
      },
      boxShadow: {
        'inner-custom-bottom-btn': 'inset 0 -2px 0 3px #140E66',
        'inner-custom-top-btn': 'inset 0 1px 0 6px #3C74FF',
      },
    },
  },
  plugins: [],
};
