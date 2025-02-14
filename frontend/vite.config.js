import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Bind to all network interfaces (0.0.0.0)
    port: 5173, // Ensure this matches your Docker EXPOSE port
  },
})
