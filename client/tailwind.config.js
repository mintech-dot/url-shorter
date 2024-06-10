/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
    colors:{
      "brand-primary-pink": "#EB568E",
      "brand-primary-blue": "#144EE3",
      "black": "#0B101B",
      "grey": "#181E29",
      "lite": "#C9CED6",
      "white": "#FFFFFF",
      "transparent": "transparent"
    }
  },
  
  plugins: [],
}