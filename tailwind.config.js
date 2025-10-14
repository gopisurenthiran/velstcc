/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Your existing foundersgrotesk font
        founders: ["var(--font-foundersgrotesk)"], 
        
        // 🚀 FIX: Added Baskervville font mapping
        baskervville: ["var(--font-Baskervville)", "serif"], 
      },
      spacing: {
        // Adds a new utility: gap-18 (4.5rem = 72px)
        '18': '4.5rem', 
        // Adds a new utility: gap-30 (7.5rem = 120px)
        '30': '7.5rem',
        // Adds a new utility: gap-huge (10rem = 160px)
        'huge': '10rem', 
      },
    },
  },
  plugins: [],
};