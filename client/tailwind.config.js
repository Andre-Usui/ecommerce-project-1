import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-horizontal': { 'writing-mode': 'horizontal-tb', 'text-orientation': 'upright'},
        '.writing-mode-vertical': { 'writing-mode': 'vertical-rl', 'text-orientation': 'upright' },
        
      });
    },

  ],
  variants: {
    extend: {
      backgroundColor: ['checked'], // Ativando o suporte a bg quando "checked"
      borderColor: ['checked'],     // Ativando suporte para border quando "checked"
    },
  }
}

