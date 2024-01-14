/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"
],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'brown-new': '#69432B',
        'light-new': '#F4F4F4'     
      },
      flexBasis: {
        '17/30': '54.79166667%',
        '17/60': '26.45833333%',
        '3/40': '7.5%'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

