import "styled-components";
interface IPalette {
  main: string;
  darker?: string;
  light?: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderColor: string;
    borderRadius: {
      small: string,
      medium: string,
      large: string
    };
    boxShadow: {
      darker: string;
      light: string;
    };
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
      yellow: IPalette;
    };
  }
}