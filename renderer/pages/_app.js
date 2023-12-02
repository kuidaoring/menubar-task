import { ThemeProvider } from "@emotion/react";
import "../styles/global.css";
import { CssBaseline, createTheme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";

export default function App({ Component, pageProps }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
