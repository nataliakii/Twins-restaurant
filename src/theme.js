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
      main: "#1a1814",
      light: "#302f2b",
    },
    text: {
      light: "white",
      dark: "#1a1814",
      main: "#35C330",
      red: "#c33035",
    },
  },

  typography: {
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),
    h1: {
      fontSize: "65px",
      fontFamily: ["Mrs Saint Delafield", "cursive"].join(","),
    },
    allVariants: {
      fontFamily: ["Josefin Sans", "sans-serif"].join(","),
    },
  },
});
