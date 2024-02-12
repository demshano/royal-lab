/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'green-hover': '0 4px 12px -1px rgba(0, 255, 0, 0.1), 0 2px 12px -1px rgba(0, 255, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
