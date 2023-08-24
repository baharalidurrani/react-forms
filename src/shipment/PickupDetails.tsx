import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function PickupDetails(): React.ReactElement {
  console.log("🔄 PickupDetails Rendered");
  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 1 }}>
      <Stack direction="row" alignItems="center" gap={1}>
        <PlaceOutlinedIcon />
        <Typography variant="h6">Pickup Details</Typography>
      </Stack>
      <h5>Hello ShipmentSummary</h5>
      <h5>Hello ShipmentSummary</h5>
      <h5>Hello ShipmentSummary</h5>
    </Paper>
  );
}
