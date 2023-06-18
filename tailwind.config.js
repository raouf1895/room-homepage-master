/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'mobile':'375px'
    },
    extend: {
      fontFamily: {
        league: ['League Spartan', 'Arial', 'sans-serif'],
      },
      gridTemplateRows: {
        '2': '3fr, 1fr',
      },
      gridTemplateColumns:{
        '4': 'repeat(2, 3fr), 1fr, 3fr'
      },
      colors:{
        'dark-grey': 'hsl(0, 0%, 63%)',
        'very-dark-blue': 'hsl(0, 0%, 27%)',
        'pop-up': 'rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
