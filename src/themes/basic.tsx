import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h2: {
      fontSize: "4rem",
      lineHeight: "4.625rem",
    },
    h3: {
      fontSize: "3rem",
      lineHeight: "3.125rem",
    },
    h4: {
      fontSize: "2.5rem",
      lineHeight: "3.875rem",
    },
    h5: {
      fontSize: "1.875rem",
      lineHeight: "2.5rem",
    },
    h6: {
      fontSize: "1.5rem",
      lineHeight: "2.125rem",
    },
    subtitle1: {
      fontSize: "1.25rem",
      lineHeight: "2rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: "2rem",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "lightgray",
          paddingTop: "20px",
          paddingBottom: "25px",
          marginBottom: "25px",
          borderRadius: "25px",
          boxShadow:
            "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
        },
      },
    },
  },
});

const Basic = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Basic;
