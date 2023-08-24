import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function GoodsDetails(): React.ReactElement {
  console.log("🔄 GoodsDetails Rendered");
  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 1 }}>
      <Typography variant="body1">GoodsDetails</Typography>
      <Typography variant="body1">GoodsDetails</Typography>
      <Typography variant="body1">GoodsDetails</Typography>
      <Typography variant="body1">GoodsDetails</Typography>
    </Paper>
  );
}
