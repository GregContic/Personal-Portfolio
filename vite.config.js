// filepath: c:\Users\ACER\OneDrive\Desktop\Portfolio\Personal_Portfolio\vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/personal-portfolio/',
});