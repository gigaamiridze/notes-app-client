export interface ITheme {
  colors: IColors;
  fonts: IFonts;
}

interface IColors {
  main: string;
  text: string;
  dark: string;
  gray: string;
  bg: string;
  lighter: string;
  white: string;
  border: string;
}

interface IFonts {
  primary: string;
}
