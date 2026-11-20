/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1c3112',
          soft: '#2c4a22',
        },
        muted: '#5a6854',
        canvas: '#f3f4f2',
        cream: '#f7f1dc',
        line: '#d5ddd2',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
      },
    },
  },
  plugins: [],
}
