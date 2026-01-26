import { TypographyVariantsOptions } from "@mui/material/styles";
import { Inter, Monomaniac_One } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const monomaniac = Monomaniac_One({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});

export const typography: TypographyVariantsOptions = {
  fontFamily: ['"Inter"', '"Monomaniac One"', "sans-serif"].join(","),
  h1: {
    fontFamily: "Monomaniac One, sans-serif",
    fontSize: "6.8rem",
    
    "@media (max-width:1200px)": {
      fontSize: "5.2rem",
    },
  },
  h2: {
    fontFamily: "Monomaniac One, sans-serif",
    fontSize: "5rem",
    "@media (max-width:1200px)": {
      fontSize: "3rem",
    },
  },
  h3: {
    fontFamily: "Monomaniac One, sans-serif",
    fontSize: "2rem",
  },
  body1: {
    fontFamily: "Inter, sans-serif",
    fontSize: "1.8rem",
    lineHeight: 1,
    letterSpacing: "-1%",
    "@media (max-width:1200px)": {
      fontSize: "1.6rem",
    },
  },
  body2: {
    fontFamily: "Inter, sans-serif",
    fontSize: "1.6rem",
    fontWeight: "400",
  },
  subtitle1: {
    fontFamily: "Inter, sans-serif",
    fontSize: "1.4rem",
  },
};
