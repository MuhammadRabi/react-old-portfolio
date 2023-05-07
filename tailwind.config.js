module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        300: "repeat(auto-fill, minmax(300px, 1fr))",
        320: "repeat(auto-fill, minmax(320px, 1fr))",
        250: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      colors: {
        main: "#00bcd4",
      },
    },
  },
  plugins: [],
};
