/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/pattern.png')",
        'strategy-pattern': "url('/img/pattern2.png')",
      },
      colors: {
        primary: {
          200: '#E2ECFE',
          300: '#B6D1FB',
          400: '#88B2F9',
          500: '#6099F7',
          600: '#387FF5',
          700: '#2D66C4',
          800: '#224C93',
        },
        secondary: {
          100: '#F5F7FA',
          200: '#ECEEF4',
          300: '#D2D5E2',
          400: '#B6BCCD',
          500: '#9EA5BD',
          600: '#79829F',
          700: '#626981',
          800: '#4B5162',
          900: '#343844',
          1000: '#1C1F25',
        }
      },
      screens: {
        'min-422': '422px',
        'xs': '490px',
        'min-910': '910px',
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
    }
  },
  plugins: [],
};
