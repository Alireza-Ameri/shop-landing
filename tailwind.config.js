module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        505: "505px",
        1010: "1010px",
        413: "413px",
        54: "54px",
        529: "529px",
        229: "229px",
        316: "316px",
        520: "520px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
