/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    screens: {
      'sm': {'max': '768px'},
      'md': '768px',
      'lg': '1024px',
     'xl': '1440px',
    }
    ,
    fontFamily: {
      Misans: ['Graphik', 'sans-serif'],
      
    },

    },
  plugins: [],
}
