module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'monoton': ['Monoton', 'sans-serif'],
      },
      backgroundImage: {        
        'clouds-pattern': "url('./assets/svg/endless-clouds.svg')",
      },
      screens: {
        'xs': '320px'
      }
    },
  },
  plugins: [],
}
