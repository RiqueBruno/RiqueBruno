// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        slider: 'slider 32s linear infinite',
      },
      keyframes: {
        slider: {
          from: { left: '100%' },
          to: { left: '-190px' },
        },
      },
    },
    colors: {
      primary: {
        light: '#E24AC6',
        DEFAULT: '#E24AC6',
        dark: '#E24AC6',
      },
      secondary: {
        light: '#7D0C69',
        DEFAULT: '#d1d5db',
        dark: '#6b7280',
      },
      background: {
        light: '#DADADA',
        DEFAULT: '#000000',
        dark: '#000000',
      },
      link: '#E24ACE',
      text: {
        light: '#430337',
        DEFAULT: '#7D0C69',
        dark: '#FFFFFF',
      },
      footer: {
        light: '#3B0734',
        DEFAULT: '#2F1F2E',
        dark: '#2F1F2E',
      },
      white: '#ffffff',
      black: '#000000',
      transparent: 'rgba(94, 88, 88, 0.19)',
    },
  },
  plugins: [],
  darkMode: 'class',
};
