import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), //aliases the bundler to the src folder, so we can import files from the src folder using @ instead of relative paths. For example, instead of importing a file like this: import MyComponent from '../../components/MyComponent', we can import it like this: import MyComponent from '@/components/MyComponent'. This makes our imports cleaner and easier to read.
    },
  },
})
