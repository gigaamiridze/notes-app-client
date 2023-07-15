export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  transition: string;
}

interface IColors {
  main: string;
  text: string;
  dark: string;
  gray: string;
  bg: string;
  light: string;
  lighter: string;
  white: string;
  border: string;
}

interface IFonts {
  primary: string;
}
