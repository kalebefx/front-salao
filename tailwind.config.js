/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2a3d1e', // verde escuro — cor primária
          light: '#3d5730',
        },
        gold: {
          DEFAULT: '#C8943A', // dourado — cor secundária
          light: '#e0b46a',
          dark: '#a87729',
        },
        cream: '#fdf9f4', // fundo claro
        studio: {
          black: '#151310', // fundo escuro do hero
          charcoal: '#1e1b17',
        },
      },
      fontFamily: {
        // Corpo / UI: pedido explícito do briefing
        sans: ['"Segoe UI"', 'system-ui', 'sans-serif'],
        // Display elegante com itálico, conforme a referência visual do hero
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
