module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens : {
        xxs: '320px',
        xs: '576px'
      },
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
        'lego-clone': "url('./assets/png/lego-clone-home.png')"
      },
    },
  },
  plugins: [],
}
