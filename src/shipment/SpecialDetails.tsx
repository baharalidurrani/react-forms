import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function SpecialDetails(): React.ReactElement {
  console.log("🔄 SpecialDetails Rendered");
  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 1 }}>
      <Typography variant="body1">SpecialDetails</Typography>
      <Typography variant="body1">SpecialDetails</Typography>
      <Typography variant="body1">SpecialDetails</Typography>
      <Typography variant="body1">SpecialDetails</Typography>
    </Paper>
  );
}
