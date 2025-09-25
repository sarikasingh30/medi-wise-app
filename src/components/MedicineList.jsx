import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Grid,

  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import StorageIcon from '@mui/icons-material/Storage';

export default function MedicineList() {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/medicines.json")
      .then((res) => res.json())
      .then((data) => setMedicines(data));
  }, []);

  // filtering medicine
  const filteredMedicines = medicines.filter((med) =>
    med.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom textAlign="center">
        Explore Medicines
      </Typography>

      {/* Search Bar */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <TextField
    label="Search Medicine"
    variant="outlined"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    sx={{
      color:"#6abec6ff",
      width: "50%",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#6abec6ff", // default border
        },
        "&:hover fieldset": {
          borderColor: "#6abec6ff", // hover border
        },
        "&.Mui-focused fieldset": {
          borderColor: "#6abec6ff", // focused border
        },
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#6abec6ff", // label color when focused
      },
           // Label color
      "& .MuiInputLabel-root": {
        color: "#6abec6ff", // normal label
      },
    }}
  />
      </Box>

      {/* Medicines Grid */}
<Box
  sx={{
    width: "75%", 
    margin: "auto",
    padding: 2,
  }}
>
  <Grid container spacing={3}>
    {filteredMedicines.map((med) => (
      <Grid key={med._id} size={{xs:12, sm:6, md:4}}>
        <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
                background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#00796b",
                  }}
                >
                  <LocalPharmacyIcon sx={{ mr: 1 }} />
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {med.name} {med.form}
                  </Typography>
                  
                </Box>
                   <Typography variant="body2" color="text.secondary">
                  {med.generic_name}
                </Typography>
                 <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                  <FitnessCenterIcon sx={{ mr: 1 }} />{med.strength}
                </Typography>

                <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                  <DashboardCustomizeIcon sx={{ mr: 1 }} />{med.quantity} Tablet(s) in Strip
                </Typography>
                
               
               
                <Button
                  variant="contained"
                  sx={{backgroundColor:"#6abec6ff", fontWeight:"bold"}}
                  fullWidth
                  onClick={() => alert(`View details for ${med.name}`)}
                >
                  Lets Compare
                </Button>
              </CardContent>
            </Card>
      </Grid>
    ))}
  </Grid>
</Box>

    </Box>
  );
}



