import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import LogoLight from "../assets/logo-light.svg";

const theme = createTheme({
  palette: {
    primary: {
      light: "#6f8ba3",
      main: "#2d506a",
      dark: "#112c40",
      contrastText: "#fff",
    },
  },
});

export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <img src={LogoLight} style={{ marginRight: "8px" }} />
          <Typography variant="h6" color="inherit" noWrap>
            React Code Challenge
          </Typography>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </ThemeProvider>
  );
};
