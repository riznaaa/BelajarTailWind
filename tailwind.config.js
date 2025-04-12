/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'accent': '#46A358',
        'text-dark': '#3D3D3D',
        'text-gray': '#727272',
        'soft-green': '#46A3581A',
        background: '#F5F5F5',
      },
      fontFamily:{
        'poppins': ['poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

