/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'rgb(211, 207, 207)', // Add your custom background color
      },
    },
  },
  plugins: [
  ('daisyui'),
  ],
}

