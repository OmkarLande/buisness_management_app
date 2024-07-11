/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#3D3540',
        buttonColour: '#605565',
        custColor2: '#574969',
      },
    },
  },
  plugins: [],
}

