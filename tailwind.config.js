/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-Baskervville)", "serif"],
        secondary: ["var(--font-foundersgrotesk)", "sans-serif"],
      },
      colors: { // Primary color for 
       primary: "#2D3091", 
       Secondary: "#000000",
     },
      spacing: { '18': '4.5rem', '30': '7.5rem', 'huge': '10rem', },

      // Custom utilities for typography
      typography: {
        DEFAULT: {},
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        /* ------------------ PRIMARY FONT (Baskervville Medium) ------------------ */

        ".primary-title": {
          fontFamily: "var(--font-Baskervville)",
          fontWeight: "500",
          fontSize: "45px",
          lineHeight: "56px",
        },

        ".primary-subtitle": {
          fontFamily: "var(--font-Baskervville)",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "auto",
        },

        /* ------------------ SECONDARY FONT (Founders Grotesk Light) ------------------ */

        ".secondary-title": {
          fontFamily: "var(--font-foundersgrotesk)",
          fontWeight: "300",
          fontSize: "32px",
          lineHeight: "40px",
        },

        ".secondary-subtitle": {
          fontFamily: "var(--font-foundersgrotesk)",
          fontWeight: "300",
          fontSize: "20px",
          lineHeight: "30px",
        },

        ".secondary-description": {
          fontFamily: "var(--font-foundersgrotesk)",
          fontWeight: "300",
          fontSize: "16px",
          lineHeight: "30px",
        },

        ".secondary-highlight": {
          fontFamily: "var(--font-foundersgrotesk)",
          fontWeight: "300",
          fontSize: "25px",
          lineHeight: "40px",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
