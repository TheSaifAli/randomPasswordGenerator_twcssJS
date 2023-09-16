/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes:{
        copyShow:{
          'from':{
            opacity:'0',
            top:'-10%'
          },
          'to':{
            opacity:'1',
            top:'0'
          }
        },
        copyHide:{
          'from':{
            opacity:'1',
            top:'0'
          },
          'to':{
            opacity:'0',
            top:'-10%'
          },
        }
      },

    },
  },
  plugins: [],
}

