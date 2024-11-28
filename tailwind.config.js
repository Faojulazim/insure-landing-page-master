tailwind.config = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        DarkViolet: "hsl(256, 26%, 20%)",
        GrayishBlue: "hsl(216, 30%, 68%)",
        VeryDarkViolet: "hsl(270, 9%, 17%)",
        DarkGrayishViolet: "hsl(273, 4%, 51%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
        DMSerif: ["DM Serif Display", "serif"],
      },
      screens: {
        tsf: "375px",
        ftf: "425px",
      },
    },
  },
  plugins: [],
};
