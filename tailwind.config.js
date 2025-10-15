/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Primary font (for headings)
        primary: ["var(--font-foundersgrotesk)", "sans-serif"],
        // Secondary font (for body)
        secondary: ["var(--font-Baskervville)", "serif"],
      },
      colors: {
        // Primary color for font
        primary: "#2D3091",
        // Secondary color for font
        secondary: "#000000",
      },
      spacing: {
        '18': '4.5rem', 
        '30': '7.5rem',
        'huge': '10rem',
      },
    },
  },
  plugins: [],
};
