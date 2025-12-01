/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#121212",
          gray: "#F4F4F4",
          accent: "#2b59c3", // Biru vibrant
          yellow: "#E6FC5C", // Kuning stabilo
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // Mengambil dari variabel di layout.js
        display: ["var(--font-space)", "sans-serif"], // Mengambil dari variabel di layout.js
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
