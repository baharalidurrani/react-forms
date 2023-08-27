import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function VehicleDetails(): React.ReactElement {
  console.log("🔄 VehicleDetails Rendered");

  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 2 }}>
      <Stack spacing={4}>
        <Stack direction="row" alignItems="center" gap={1}>
          <LocalShippingOutlinedIcon color="info" />
          <Typography variant="h6">Vehicle Details</Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField label="Vehicle Type" name="vehicleType" fullWidth />
          <TextField label="Vehicle Variant" name="vehicleVariant" fullWidth />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Number of Vehicles"
            name="numberOfVehicles"
            fullWidth
          />
          <TextField
            label="Total Shipment Weight"
            name="shipmentWeight"
            fullWidth
          />
        </Stack>
      </Stack>
    </Paper>
  );
}
