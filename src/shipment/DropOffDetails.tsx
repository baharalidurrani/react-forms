import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function DropOffDetails(): React.ReactElement {
  console.log("🔄 DropOffDetails Rendered");
  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 1 }}>
      <Typography variant="body1">DropOffDetails</Typography>
      <Typography variant="body1">DropOffDetails</Typography>
      <Typography variant="body1">DropOffDetails</Typography>
      <Typography variant="body1">DropOffDetails</Typography>
    </Paper>
  );
}
