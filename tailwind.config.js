module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        appear: 'appear 0.2s ease-in-out 1 forwards',
        disappear: 'disappear 0.2s ease-in-out 1 forwards',
      },
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        disappear: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
