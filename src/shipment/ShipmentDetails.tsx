import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function ShipmentDetails(): React.ReactElement {
  console.log("🔄 ShipmentDetails Rendered");
  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 1 }}>
      <Typography variant="body1">ShipmentDetails</Typography>
      <Typography variant="body1">ShipmentDetails</Typography>
      <Typography variant="body1">ShipmentDetails</Typography>
      <Typography variant="body1">ShipmentDetails</Typography>
    </Paper>
  );
}
