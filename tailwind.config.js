// tailwind.config.js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '1024px',  
        'md': '1280px',  
        'lg': '1440px',  
        'xl': '1920px',   
        '2xl': '2560px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}