import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function ContainerDetails(): React.ReactElement {
  console.log("🔄 ContainerDetails Rendered");
  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 1 }}>
      <Typography variant="body1">ContainerDetails</Typography>
      <Typography variant="body1">ContainerDetails</Typography>
      <Typography variant="body1">ContainerDetails</Typography>
      <Typography variant="body1">ContainerDetails</Typography>
    </Paper>
  );
}
