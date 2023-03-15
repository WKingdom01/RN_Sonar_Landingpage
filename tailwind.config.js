/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}' ],
  theme: {
    extend: {
      colors: {
        black: {
          light: '#1D1D1D',
        },
        blue: {
          dark: '#016099',
          light: '#2CA3D1',
        },
        sky: {
          dark: '#2CA3D1',
          light: '#C2EEFF',
        },
        gray: {
          light: '#F9F9F9',
        },
        yellow: '#FEC601',
      },
      dropShadow: {
        '3xl': '9px 17px 47px rgba(60, 60, 60, 0.25)',
        '4xl': '3px 8px 14px rgba(199, 199, 199, 0.27)',
      },
    },
  },
  plugins: [],
}
