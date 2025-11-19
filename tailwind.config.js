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
        // ~28px on mobile → up to ~45px on large screens
        fontSize: "clamp(1.75rem, 4vw, 2.8125rem)",
        lineHeight: "1.25",
      },

      ".primary-subtitle": {
        fontFamily: "var(--font-Baskervville)",
        fontWeight: "500",
        // ~18px → ~24px
        fontSize: "clamp(1.125rem, 2.4vw, 1.5rem)",
        lineHeight: "1.4",
      },

      /* ------------------ SECONDARY FONT (Founders Grotesk Light) ------------------ */

      ".secondary-title": {
        fontFamily: "var(--font-foundersgrotesk)",
        fontWeight: "300",
        // ~22px → ~32px
        fontSize: "clamp(1.375rem, 3vw, 2rem)",
        lineHeight: "1.3",
      },

      ".secondary-subtitle": {
        fontFamily: "var(--font-foundersgrotesk)",
        fontWeight: "300",
        // ~16px → ~20px
        fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
        lineHeight: "1.5",
      },

      ".secondary-description": {
        fontFamily: "var(--font-foundersgrotesk)",
        fontWeight: "300",
        // ~15px → ~18px
        fontSize: "clamp(0.9375rem, 2vw, 1.125rem)",
        lineHeight: "1.6",
      },

      ".secondary-highlight": {
        fontFamily: "var(--font-foundersgrotesk)",
        fontWeight: "300",
        // ~18px → ~25px
        fontSize: "clamp(1.125rem, 2.5vw, 1.5625rem)",
        lineHeight: "1.4",
      },
    };

    addUtilities(newUtilities);
  },
],

};
