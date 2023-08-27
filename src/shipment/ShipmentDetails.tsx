import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

export default function ShipmentDetails(): React.ReactElement {
  console.log("🔄 ShipmentDetails Rendered");

  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 2 }}>
      <Stack spacing={4}>
        <Stack direction="row" alignItems="center" gap={1}>
          <BookOutlinedIcon color="info" />
          <Typography variant="h6">Shipment Details</Typography>
        </Stack>
        <Stack direction="row" spacing={4}>
          <TextField label="Shipper Entity" fullWidth />
          <TextField label="Shipper Project" fullWidth />
        </Stack>
        <Stack direction="row" spacing={4}>
          <TextField label="Shipper Personal Name" fullWidth />
          <TextField label="Contact Number" type="tel" fullWidth />
        </Stack>

        <Stack direction="row" spacing={4}>
          <FormControl fullWidth>
            <FormLabel id="radio-buttons-group-payment-type-label">
              Select Payment Type
              <Tooltip title="Hello Tooltip 👋" placement="top" arrow>
                <IconButton>
                  <InfoOutlined />
                </IconButton>
              </Tooltip>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="radio-buttons-group-payment-type-label"
              defaultValue="toPay"
              name="radio-buttons-group"
            >
              <FormControlLabel value="pay" control={<Radio />} label="Pay" />
              <FormControlLabel
                value="toPay"
                control={<Radio />}
                label="To Pay"
              />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth>
            <FormLabel id="radio-buttons-group-pod-label">
              POD Hard Copy
              <Tooltip title="Hello Tooltip 👋" placement="top" arrow>
                <IconButton>
                  <InfoOutlined />
                </IconButton>
              </Tooltip>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="radio-buttons-group-pod-label"
              // defaultValue={true}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value={true}
                control={<Radio />}
                label="POD Required"
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="Not Required"
              />
            </RadioGroup>
          </FormControl>
        </Stack>

        <Stack direction="row" spacing={4}>
          <FormControl fullWidth>
            <FormLabel id="radio-buttons-group-shipment-type-label">
              Select Shipment Type
              <Tooltip title="Hello Tooltip 👋" placement="top" arrow>
                <IconButton>
                  <InfoOutlined />
                </IconButton>
              </Tooltip>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="radio-buttons-group-shipment-type-label"
              // defaultValue="toPay"
              name="radio-buttons-group"
            >
              <FormControlLabel value="spot" control={<Radio />} label="Spot" />
              <FormControlLabel
                value="contractual"
                control={<Radio />}
                label="Contractual"
              />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth>
            <FormLabel id="radio-buttons-group-pricing-type-label">
              Select Pricing Type
              <Tooltip title="Hello Tooltip 👋" placement="top" arrow>
                <IconButton>
                  <InfoOutlined />
                </IconButton>
              </Tooltip>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="radio-buttons-group-pricing-type-label"
              // defaultValue={true}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="perVehicle"
                control={<Radio />}
                label="Per Vehicle"
              />
              <FormControlLabel
                value="perTonne"
                control={<Radio />}
                label="Per Tonne"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={4}>
          <FormControl fullWidth>
            <FormControlLabel
              control={<Switch />}
              label="Auto Bid Acceptance"
            />
          </FormControl>
          <FormControl fullWidth>
            <FormControlLabel
              control={<Switch />}
              label={
                <>
                  <span>Auto Bid Negotiation</span>
                  <Tooltip
                    title="Send counter offer with the maximum amount in your range.If the bid is outside the define range"
                    placement="top"
                    arrow
                  >
                    <IconButton>
                      <InfoOutlined />
                    </IconButton>
                  </Tooltip>
                </>
              }
            />
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={4}>
          <TextField label="Shipper Rate" fullWidth />
          <TextField label="Maximum Amount" fullWidth />
        </Stack>
      </Stack>
    </Paper>
  );
}
