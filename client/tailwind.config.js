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
  plugins: [flowbite.plugin()],
  variants: {
    extend: {
      backgroundColor: ['checked'], // Ativando o suporte a bg quando "checked"
      borderColor: ['checked'],     // Ativando suporte para border quando "checked"
    },
  }
}

