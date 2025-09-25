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
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={6}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Company-Name */}
          <Typography variant="h6" component="div">
            MediWise
          </Typography>

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
