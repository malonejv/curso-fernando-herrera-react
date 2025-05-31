import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig((props) => {
  const env = loadEnv(props.mode, process.cwd(), "VITE_");
  const envWithProcessPrefix = {
    "process.env": `${JSON.stringify(env)}`,
  };

  return {
    plugins: [
      react(),
    ],
    define: envWithProcessPrefix,
    resolve: {
      alias: {
        'config': path.resolve(__dirname, 'src/config'),
      },
    },
  }
})