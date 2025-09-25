import { Box, Typography, Container } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        textAlign: "center",
        backgroundImage:
          'url("https://i.pinimg.com/originals/36/42/29/3642291603d80cbf90ee7421ba227a8b.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 242, 242, 0.5)",
        }}
      />

      {/* Content */}
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          MediWise
        </Typography>
        <Typography variant="h5">
          Be wise about your medicines
        </Typography>
      </Container>
    </Box>
  );
}
