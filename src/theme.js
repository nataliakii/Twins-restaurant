import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#35C330",
      blue: "#3035c3",
      fiolet: "#be30c3",
      red: "#c33035",
    },
    secondary: {
      main: "#F5F5F5",
      middle: "#d2e0d2",
      light: "#eaf9ea",
      dark: "#248621",
    },
    text: {
      light: "#FFFFFF",
      dark: "#248621",
      main: "#35C330",
      red: "#c33035",
    },
  },

  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h1: {
      fontSize: "65px",
      fontFamily: ["Alegreya Sans", "sans-serif"].join(","),
    },
    allVariants: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
    narrow: {
      fontFamily: ["Ubuntu Condensed", "sans-serif"].join(","),
    },
  },
});
