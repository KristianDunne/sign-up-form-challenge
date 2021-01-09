module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-red': 'hsl(0, 100%, 74%)',
        'primary-green': 'hsl(154, 59%, 51%)',
        'accent-blue': 'hsl(248, 32%, 49%)',
        'neutral-dark-blue': 'hsl(249, 10%, 26%)',
        'neutral-greyish-blue': 'hsl(246, 25%, 77%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
