/** @type {import('tailwindcss').Config} */
export default {
  // Aquí le decimos a Tailwind que lea todos tus archivos Astro y HTML
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Aquí podrías agregar tus colores personalizados luego
    },
  },
  plugins: [],
};