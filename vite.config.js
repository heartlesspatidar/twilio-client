import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Dynamic base path configuration
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/twilio-services/' : '/', 
  server: {
    port: process.env.VITE_PORT || 5173,
  },
});
