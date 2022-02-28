module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'monoton': ['Monoton', 'sans-serif'],
        'reggae': ['"Reggae One"'],
        'caveat': ['Caveat'],
      },
      backgroundSize: {
        '96': '24rem',
      },
      backgroundImage: {        
        'clouds-pattern': "url('./assets/svg/endless-clouds.svg')",
        'glamorous': "url('./assets/svg/glamorous.svg')",
      },
      screens: {
        'xs': '320px'
      }
    },
  },
  plugins: [],
}
