module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        192: "48rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
