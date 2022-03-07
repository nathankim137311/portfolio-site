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
      },
      backgroundImage: {    
        'plus': "url('./assets/svg/plus.svg')",    
        'architect': "url('./assets/svg/architect.svg')",   
        'falling-triangles': "url('./assets/svg/falling-triangles.svg')",    
        'clouds-pattern': "url('./assets/svg/endless-clouds.svg')",
        'glamorous': "url('./assets/svg/glamorous.svg')",
      },
    },
  },
  plugins: [],
}
