import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function PickupDetails(): React.ReactElement {
  console.log("🔄 PickupDetails Rendered");
  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 2 }}>
      <Stack spacing={4}>
        <Stack direction="row" alignItems="center" gap={1}>
          <PlaceOutlinedIcon color="info" />
          <Typography variant="h6">Pickup Details</Typography>
        </Stack>
        <TextField label="Pickup City" name="pickupCity" fullWidth />
        <TextField label="Pickup Address" name="pickupAddress" fullWidth />
        <TextField label="Date & Time" name="dateTime" fullWidth />
      </Stack>
    </Paper>
  );
}
