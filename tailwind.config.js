/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'tw-',
  darkMode: 'selector',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    "./node_modules/flowbite/**/*.js"
  ],
  // content: ['./**/*.{liquid,js,json}'],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xl: '1440px',
      // x2lg: '1920px',
      // pageMaxWidth: '1440px',
    },
    extend: {
      colors:{
        primary: "#FFD400",
        secondary: "#EDF0F5",
        darkBg: "#282929",
        darkText : "#Fbfbfb",
        info: "#833471"
      },
      fontFamily : {
        Montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [
    // require('flowbite/plugin')
],
}

