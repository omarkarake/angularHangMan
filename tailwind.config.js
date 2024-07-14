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
      },
    },
  },
  plugins: [],
};
