import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      port: 3000,
      host: true,
      watch: {
        usePolling: true,
      },
    },
    define: {
      VITE_BACKEND_URL: JSON.stringify(env.VITE_BACKEND_URL),
    },
  };
});
