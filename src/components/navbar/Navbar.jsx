import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      ...(darkMode
        ? {}
        : {
            primary: {
              main: "#6abec6ff", // green color for light mode
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={6}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Company-Name */}
          <Link
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ textDecoration: "none" }}
            >
              MediWise
            </Typography>
          </Link>

          {/* Toggle Button */}
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => setDarkMode(!darkMode)}
            color="inherit"
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
