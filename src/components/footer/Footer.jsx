import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import { Link as RLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        pt: 4,
        pb: 2,
        px: { xs: 2, md: 6 },
      }}
    >
      <Grid container spacing={4}>
        {/* Brand + About */}
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          textAlign={{ xs: "center", md: "left" }}
          mx={"auto"}
        >
          <Grid
            container
            direction="row"
            justifyContent={{ xs: "center", md: "start" }}
            alignItems="center"
          >
            <RLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/11111/11111305.png"
                sx={{ height: 40, mr: 1 }}
              />
            </RLink>
            <RLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ textDecoration: "none" }}
              >
                MediWise
              </Typography>
            </RLink>
          </Grid>

          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Be wise about your medicines
          </Typography>
          <Typography variant="body2">
            Compare medicine prices, availability, and forms across trusted
            pharmacies.
          </Typography>
          <Typography variant="body2">
            Helping you make the right healthcare choice.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid
          size={{ xs: 12, sm: 6, md: 2 }}
          textAlign={{ xs: "center", md: "left" }}
          mx={"auto"}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Link
            href="/"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ mb: 1 }}
          >
            Home
          </Link>
          <Link
            href="/"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ mb: 1 }}
          >
            About Us
          </Link>
          <Link
            href="/"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ mb: 1 }}
          >
            Contact
          </Link>
          <Link href="/" color="inherit" underline="hover" display="block">
            FAQ
          </Link>
        </Grid>

        {/* Support */}
        <Grid
          size={{ xs: 12, sm: 6, md: 3 }}
          textAlign={{ xs: "center", md: "left" }}
          mx={"auto"}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Support
          </Typography>
          <Box
            sx={{
              display: "flex",
              aligs: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              mb: 1,
            }}
          >
            <Email fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2">support@mediwise.com</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              mb: 1,
            }}
          >
            <Phone fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2"> 1-XXX-XXX-XXXX</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <LocationOn fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2">California, US</Typography>
          </Box>
        </Grid>

        {/* Social */}
        <Grid
          size={{ xs: 12, sm: 6, md: 3 }}
          textAlign={{ xs: "center", md: "left" }}
          mx={"auto"}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Follow Us
          </Typography>
          <IconButton
            href="https://github.com"
            target="_blank"
            sx={{ color: "white" }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            href="https://linkedin.com"
            target="_blank"
            sx={{ color: "white" }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            sx={{ color: "white" }}
          >
            <Twitter />
          </IconButton>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", my: 3 }} />

      {/* Bottom Note */}
      <Typography variant="caption" display="block" textAlign="center">
        © {new Date().getFullYear()} MediWise. All rights reserved | Privacy
        Policy | Terms & Conditions
      </Typography>
    </Box>
  );
}
