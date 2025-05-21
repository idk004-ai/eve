/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#0263E0',
        secondary: '#FFD500',
        blue: {
          light: '#E6F0FF',
          DEFAULT: '#0263E0',
          dark: '#0246A1',
        },
        gray: {
          light: '#F5F5F5',
          DEFAULT: '#888888',
          dark: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}