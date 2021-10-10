module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '50vw': '50vw',
        '40vh': '40vh',
        '50vh': '50vh',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      inset: ['group-hover'],
    },
  },
  plugins: [],
}
