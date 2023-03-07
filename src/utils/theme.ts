import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderColor: "rgba(0,0,0,0.15)",
  borderRadius: "15px",
  palette: {
    common: {
      black: "#555",
      white: "#FFF",
    },
    primary: {
      main: "#2E3436", // rgb(46,52,54)
      darker: "#262610", // rgb(38,38,16)
      light: "#D8BA37", // rgb(216, 186,55)
    },
    secondary: {
      main: "#3E6CF1", // rgb(62, 108, 241)
      darker: "rgb(54, 94, 203)", // rgb(54, 94, 203)
      light: "rgb(232, 242, 242)", // rgb(232, 242, 242)
    },
  },
};
/* inspiration : https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3 */