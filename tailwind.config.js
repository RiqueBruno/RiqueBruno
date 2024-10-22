// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-magenta': '10px 10px 0px 0px rgba(255,0,255,0.2)',
      },
      animation: {
        slider: 'slider 32s linear infinite',
        sliderText: 'sliderText 90s linear infinite alternate',
        sliderTextReverse: 'sliderTextReverse 90s linear infinite alternate',
      },
      keyframes: {
        slider: {
          from: { left: '100%' },
          to: { left: '-190px' },
        },
        sliderText: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        sliderTextReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(50%)' },
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
      card: {
        light: '#281404bc',
        dark: 'rgba(111, 68, 106, 0.2)',
        cardbg: 'rgba(240, 18, 211, 0.4)',
      },
      hoverCard: {
        light: '#3a1e06bc',
        dark: '#a8359b8d',
      },
      btnCard: {
        light: 'rgba(106, 85, 48, 0.19)',
        lightHover: 'rgba(71, 55, 26, 0.3)',
        dark: 'rgba(0, 0, 0, 0.45)',
        darkHover: '#a8359b8d',
      },
      red: {
        DEFAULT: '#ff0000',
        light: '#ff4c4c',
      },
      white: '#ffffff',
      black: '#000000',
      transparent: 'rgba(94, 88, 88, 0.19)',
    },
  },
  plugins: [],
  darkMode: 'class',
};
