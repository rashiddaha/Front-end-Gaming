module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        smallTen: "0.625rem",
      },
      keyframes: {
        leftRight: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        rightLeft: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
        topDown: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        downUp: {
          "0%": { height: "100%" },
          "100%": { height: "0%" },
        },
      },
      animation: {
        leftRight: "leftRight 0.2s ease-in forwards",
        rightLeft: "rightLeft 0.2s ease-in forwards",
        topDown: "topDown 0.2s ease-in forwards",
        downUp: "downUp 0.2s ease-in forwards",
      },
      colors: {
        darkOrange: "#F69204",
        darkGray: "#303030",
        textGray: "#939393",
        scrollCol: "#4A4747",
        neonGreen: "#8AFF80",
        sidebarBg: "#393939",
        sidebarHeader: "#888888",
        toggleCircle: "#C7C0B8",
        toggleBody: "#888080",
        boxColor: "#605E5E",
        bodySection: "#212121",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
