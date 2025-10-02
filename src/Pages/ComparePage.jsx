import { useLocation } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";

import SingleMedCard from "../components/medicines/SingleMedCard";

export default function ComparePage() {
  const location = useLocation();
  const { medData } = location.state || {};

  return (
    <Box sx={{ p: 4, mb: 4 }}>
      {/* Title */}
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        color="#6abec6ff"
        fontWeight="bold"
      >
        {medData.name} {medData.strength} {medData.form}
      </Typography>

      {/* Generic Info */}
      <Typography
        variant="subtitle1"
        gutterBottom
        textAlign="center"
        fontWeight="bold"
      >
        Form : {medData.form} | Strength : {medData.strength} | Generic :{" "}
        {medData.generic_name}
      </Typography>

      {/* About Box */}
      <Box
        sx={{
          width: "50%",
          margin: "auto",
          borderRadius: 2,
          border:"1px solid #dde5e6ff",
          p: 2,
          mt: 3,
          bgcolor: "linear-gradient(135deg, #a5eef8ff, #96e3f4ff)",
          boxShadow: 3,
          transition: "0.3s",
          "&:hover": {
            bgcolor: "#bbf5f9ff",
            color: "black",
          },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
          sx={{
            "&:hover": {
              color: "red",
            },
          }}
        >
          About {medData.name}
        </Typography>
        <Divider  />
        <Typography variant="body1" pt={1} gutterBottom textAlign="center">
          {medData.use}
        </Typography>
      </Box>

      {/* Availability */}
      <Typography
        variant="h6"
        gutterBottom
        textAlign="center"
        color="#6abec6ff"
        sx={{ mt: 3, fontWeight: "bold" }}
      >
        Available in{" "}
        <Box component="span" fontSize={26} color="red">
          {medData.pharmacies.length}{" "}
        </Box>
        {medData.pharmacies.length > 1 ? "pharmacies" : "pharmacy"}
      </Typography>

      {/* Pharmacy List */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 3,
          mt: 3,
        }}
      >
        {medData.pharmacies.map((pharm) => (
          <SingleMedCard key={pharm.pharm_id} pharm={pharm} />
        ))}
      </Box>
    </Box>
  );
}
