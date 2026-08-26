import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://russellcorbett.ca'
});