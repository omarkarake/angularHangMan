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
        'blue-gradient': 'linear-gradient(to bottom, #344ABA 0%, #001479 83%)',
        'blue-action-gradient': 'linear-gradient(to bottom, #1A043A 0%, #151278 70%, #2B1677 100%)',
      },
      backgroundColor: {
        'white-opacity-20': 'rgba(255, 255, 255, 0.2)',
      },
      boxShadow: {
        'inner-custom-bottom-btn': 'inset 0 -2px 0 3px #140E66',
        'inner-custom-top-btn': 'inset 0 1px 0 6px #3C74FF',
        'inner-custom-top-btn2': 'inset 0 1px 0 6px #C642FB',
        'inner-custom-play-btn1': 'inset 0 -4px 0 5px #243041',
        'inner-custom-play-btn2': 'inset 0 -12px 0 11px #9D2DF5',
        'inner-custom-home1': 'inset 0 -8px 0 4px #140E66',
        'inner-custom-home2': 'inset 0 6px 0 8px #2463FF',
        'inner-custom-ingame-menu': 'inset 0 -5px 0 -1px rgba(157, 45, 245, 0.2)',
      },
    },
  },
  plugins: [],
};
