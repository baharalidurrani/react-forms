import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function VehicleDetails(): React.ReactElement {
  console.log("🔄 VehicleDetails Rendered");
  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 1 }}>
      <Typography variant="body1">VehicleDetails</Typography>
      <Typography variant="body1">VehicleDetails</Typography>
      <Typography variant="body1">VehicleDetails</Typography>
      <Typography variant="body1">VehicleDetails</Typography>
    </Paper>
  );
}
