import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  tailwindcss(),
svgr({
  svgrOptions: {
    icon: true,
    svgProps: {
      fill: 'currentColor',
    },
  },
}), 
], server: {
    allowedHosts: ['de7b-89-149-120-95.ngrok-free.app'],
  },
})
