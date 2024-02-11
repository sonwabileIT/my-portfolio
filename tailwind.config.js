/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    colors:{
      'cream': '#F0F0C9',
      'outerspace': '#3E4E50',
      'teal-900':'#134e4a',
       orange:colors.orange,
       white: colors.white,
    },
    extend: {},
  },
  plugins: [],
}
