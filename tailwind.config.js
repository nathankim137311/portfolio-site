module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        violet: '#A400FF',
        'hotpink': {
          100: '#FF0095',
          200: '#ED018C',
        },
        aqua: '#15EBD9',
        navy: '#030406',
        space: '#0E131F',
        denim: '#000A21'
      },
      screens : {
        xxs: '320px',
        xs: '576px'
      },
      fontFamily: {
        'archivo': ['Archivo Black', 'sans-serif']
      },
    },
  },
  plugins: [],
}
