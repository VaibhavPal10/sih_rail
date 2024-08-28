/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-maroon': '#75002b',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

