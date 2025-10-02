import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Grid,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <AppBar position="static" elevation={6} sx={{
        bgcolor: "primary.main",}}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        {/* Company-Name */}
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Box
            component="img"
            src="https://cdn-icons-png.flaticon.com/512/11111/11111305.png" 
            sx={{ height: 40, mr: 1 }} 
          />
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ textDecoration: "none" }}
            >
              MediWise
            </Typography>
          </Link>
        </Grid>

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
  );
}

export default Navbar;
