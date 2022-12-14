/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        cyan: {
          500: '#81D8F7',
          300: '#98E1F8',
        },

        'red-400': '#FF5343',

        black: '#000',
        white: '#FFF',

        gray: {
          900: '#121214',
          800: '#202024',
          400: '#7C7C8A',
          200: '#C4C4CC',
          100: '#E1E1E6',
        },

        trasnparent: 'transparent',
      },
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      },
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
};
