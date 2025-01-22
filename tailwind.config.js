/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "geist" : ["Geist", "serif"],
        "jakarta" : ["Plus Jakarta Sans", "serif"]
      }
    },
  },
  plugins: [],
}