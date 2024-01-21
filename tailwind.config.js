/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('assets/login-bg.png')",
        'home-img': "url('assets/home-img.png')",
      }
    }
  },
  plugins: [],
}