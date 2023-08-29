import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import FormAutocomplete from "./FormAutocomplete";

export default function VehicleDetails(): React.ReactElement {
  console.log("🔄 VehicleDetails Rendered");

  function handleVehicleTypeChange(
    _event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ): void {
    console.log("handleVehicleTypeChange", value);
  }

  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 2 }}>
      <Grid container spacing={4}>
        <Grid xs={12}>
          <Stack direction="row" alignItems="center" gap={1}>
            <LocalShippingOutlinedIcon color="info" />
            <Typography variant="h6">Vehicle Details</Typography>
          </Stack>
        </Grid>
        <Grid xs={6}>
          <FormAutocomplete
            label="Vehicle Type"
            name="vehicleType"
            fullWidth
            onChange={handleVehicleTypeChange}
            options={["Car", "Bike", "Cycle", "Bicycle", "Caddy"]}
          />
        </Grid>
        <Grid xs={6}>
          <FormAutocomplete
            label="Vehicle Variant"
            name="vehicleVariant"
            fullWidth
            onChange={handleVehicleTypeChange}
            options={["Car", "Bike", "Cycle", "Bicycle", "Caddy"]}
          />
        </Grid>
        <Grid xs={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="numberOfVehicles">
              Number of Vehicles
            </InputLabel>
            <OutlinedInput
              id="numberOfVehicles"
              name="numberOfVehicles"
              label="Number of Vehicles"
              type="number"
              defaultValue={1}
              inputProps={{ min: 1 }}
              sx={{
                input: { textAlign: "center" },
                // Hide Up/Down Arrow on the number fields.
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                  { display: "none" },
                "& input[type=number]": {
                  MozAppearance: "textfield",
                },
              }}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton aria-label="decrease value" edge="start">
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="increase value" edge="end">
                    <AddCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid xs={6}>
          <TextField
            label="Total Shipment Weight"
            name="shipmentWeight"
            fullWidth
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
