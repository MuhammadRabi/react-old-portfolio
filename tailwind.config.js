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
        // main: "#00bcd4",
        //main: "#146C94",
        //  main: "#19A7CE",
        main: "#5C469C",
        darker: "#bebaba",
        dark: "#333",
        darkest: "#1b1b1b",
      },
    },
  },
  plugins: [],
};
