module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // paths to all of your components
  ],
  theme: {
    extend: {
      // Add your custom configurations or overrides here.
      // For example, you could customize your color palette:
      colors: {
        "lahthi-blue": "#5f99f7",
        // ...add more custom colors if needed
      },
      // Add custom spacing, font-sizes, etc.
    },
  },
  plugins: [
    // Add Tailwind CSS plugins here if needed, for example:
    // require('@tailwindcss/forms'),
  ],
};
