/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'black-rgba': 'rgba(0, 0, 0, 0.75)',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
