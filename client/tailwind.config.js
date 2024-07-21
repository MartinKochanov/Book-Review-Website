/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('../src/assets/logo.png')",
        coverImg: "url('../src/assets/cover.png')"
      }
    },
  },
  plugins: [],
}