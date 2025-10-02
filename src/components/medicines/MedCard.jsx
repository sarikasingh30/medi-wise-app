
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { Box, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DescriptionIcon from "@mui/icons-material/Description";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function MedCard({ medData }) {
  const [expanded, setExpanded] =useState(false);
  const navigate = useNavigate();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
        color: "black",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: " #6abec6ff" }} aria-label="recipe">
            {medData.name[0]}
          </Avatar>
        }
        title={`${medData.name} ${medData.strength} ${medData.form}`}
        subheader={medData.generic_name}
        subheaderTypographyProps={{ color: "#7c7f80ff" }}
      />

      <CardActions disableSpacing>
        <IconButton
          onClick={() =>
            navigate("/compare", {
              state: { medData },
            })
          }
        >
          <LocalPharmacyIcon sx={{ color: " #6abec6ff" }} />
        </IconButton>
        <ExpandMore
          onClick={handleExpandClick}
          aria-label="show more"
          sx={{ color: "#7c7f80ff" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <DescriptionIcon sx={{ color: "#6abec6ff", mr: 1 }} />
            <Typography>{medData.use}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <DashboardCustomizeIcon sx={{ color: "#6abec6ff", mr: 1 }} />
            <Typography>
              Available in{" "}
              <Box
                component="span"
                sx={{ fontWeight: "bold", color: "#ef0a0aff" }}
              >
                {medData.pharmacies.length}
              </Box>{" "}
              {medData.pharmacies.length > 1 ? "pharmacies" : "pharmacy"}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6abec6ff",
              fontWeight: "bold",
              color: "white",
            }}
            fullWidth
            onClick={() =>
              navigate("/compare", {
                state: { medData },
              })
            }
          >
            Your Choice Matters
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}
