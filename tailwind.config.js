/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Adiciona o gradiente como uma cor de fundo personalizada
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(9, 9, 121, 1) 100%)',
      },
			fontFamily: {
        'karla': ['Karla', 'sans-serif'],
      },
    },
    // Define cores personalizadas
    colors: {
			background: 'rgb(2,0,36)',
      primary: 'rgb(7,7,7)',
      secundary: '#fff',
			tertiary:'#3e4357',
    },
  },
  plugins: [],
}

