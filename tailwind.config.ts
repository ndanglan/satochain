/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'elevation-dark-1':
          '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
      },
      fontSize: {
        '16': '4rem',
      },
    },
    colors: {
      ...colors,
      primary: '#F7630C',
      secondary: colors.pink,
      'M3-sys-dark-on-surface': '#F1DFD9',
      'M3-state-layers-dark-on-primary': 'rgba(56, 30, 114)',
    },
  },
  plugins: [],
};
