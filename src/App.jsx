import { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import MainRoute from './Pages/MainRoute';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      ...(darkMode
        ? {primary: {
              main: "#2f3131ff",
            }}
        : {
            primary: {
              main: "#6abec6ff",
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar  darkMode={darkMode} setDarkMode={setDarkMode} />
      <MainRoute/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
