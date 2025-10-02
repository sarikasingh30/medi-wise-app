import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LanguageIcon from "@mui/icons-material/Language";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
export default function SingleMedCard({ pharm }) {
  return (
    <Card
      key={pharm.pharm_id}
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",

        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <CardHeader
        avatar={<LocalPharmacyIcon sx={{ color: "#6abec6ff" }} />}
        title={pharm.name}
        titleTypographyProps={{
          variant: "h6",
          fontWeight: "bold",
          color: "#18b8c6ff",
        }}
      />
      <Divider color={"black"} />
      <CardContent>
        {/* Price */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <AttachMoneyIcon color="success" sx={{ mr: 1 }} />
          <Typography>
            <Box
              component="span"
              sx={{
                textDecoration: "line-through",
                color: "error.main",
                mr: 1,
              }}
            >
              ${pharm.price.cash}
            </Box>
            <Box
              component="span"
              sx={{ fontWeight: "bold", color: "success.main" }}
            >
              ${pharm.price.discounted}
            </Box>
          </Typography>
        </Box>

        {/* Availability */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          {pharm.availability ? (
            <CheckCircleIcon color="success" sx={{ mr: 1 }} />
          ) : (
            <CancelIcon color="error" sx={{ mr: 1 }} />
          )}
          <Typography color="primary">
            {pharm.availability ? "In Stock" : "Out of Stock"}
          </Typography>
        </Box>
        {/*Buy Online*/}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LanguageIcon color="success" sx={{ mr: 1 }} />
          <Typography
            component="a"
            href={pharm.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "primary.main", textDecoration: "none" }}
          >
            Buy Online
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
