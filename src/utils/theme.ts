import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderColor: "rgba(0,0,0,0.15)",
  borderRadius: {
    small: "15px",
    medium: "20px",
    large: "30px"
  },
  boxShadow: {
    darker: "rgba(0, 0, 0, 0.25)",
    light: "rgba(0, 0, 0, 0.1)"
  },
  palette: {
    common: {
      black: "#555",
      white: "#FFF",
    },
    primary: {
      main: "#2E3436",
      darker: "#202425",
      light: "rgba(46, 52, 54, 0.5)",
    },
    secondary: {
      main: "#3E6CF1",
      darker: "#2B4BA8",
      light: "#6489F3",
    },
    yellow: {
      main: "#EFB829"
    }
  },
};
/* inspiration : https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3 */
// Theme color light and darker created by using Mui palette color generator