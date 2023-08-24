import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function ShipmentSummary(): React.ReactElement {
  console.log("🔄 ShipmentSummary Rendered");
  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 1 }}>
      <Typography variant="body1">Hello Summary</Typography>
      <Typography variant="body1">Hello Summary</Typography>
      <Typography variant="body1">Hello Summary</Typography>
      <Typography variant="body1">Hello Summary</Typography>
    </Paper>
  );
}
