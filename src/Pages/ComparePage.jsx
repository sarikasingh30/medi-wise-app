import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function ComparePage() {
  const location = useLocation();
  const { medData } = location.state || {};

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Compare Pharmacies for {medData.name} {medData.strength} {medData.form}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Form: {medData.form} | Strength: {medData.strength} | Generic:{" "}
        {medData.generic_name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Description: {medData.use}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Available in {medData.pharmacies.length}{" "}
        {medData.pharmacies.length > 1 ? "pharmacies" : "pharmacy"}
      </Typography>

      {medData.pharmacies.map((pharm) => (
        <Box
          key={pharm.pharm_id}
          sx={{ border: "1px solid #ccc", p: 2, mb: 2 }}
        >
          <Typography>{pharm.name}</Typography>
          <Typography>Price: $ <Box component="span" sx={{ textDecoration: 'line-through', color: 'red' }}>{pharm.price.cash}</Box> <Box component="span" sx={{ fontWeight:"bold", color: 'green' }}>{pharm.price.discounted}</Box> </Typography>
          <Typography>{pharm.url}</Typography>
          <Typography>
            Available: {pharm.availability ? "Yes" : "No"}
          </Typography>
        </Box>
      ))}
      
    </Box>
  );
}
