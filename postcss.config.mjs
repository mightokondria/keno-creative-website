/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Ubah dari 'tailwindcss' menjadi '@tailwindcss/postcss'
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default config;
