import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { TShipper, fetchList as searchCallback } from './API';
import FormAutocomplete from './FormAutocomplete';

export default function ShipmentDetails(): React.ReactElement {
  console.log('🔄 ShipmentDetails Rendered');

  const handleShipperEntity = (_event: React.SyntheticEvent<Element, Event>, value: TShipper | null): void => {
    console.log('handleShipperEntity');
    console.log(value);
  };

  return (
    <Paper variant="outlined" sx={{ height: '100%', padding: 2 }}>
      <Grid container spacing={4}>
        <Grid xs={12}>
          <Stack direction="row" alignItems="center" gap={1}>
            <BookOutlinedIcon color="info" />
            <Typography variant="h6">Shipment Details</Typography>
          </Stack>
        </Grid>

        <Grid xs={12} sm={6}>
          <FormAutocomplete
            required
            fullWidth
            name="shipperEntity"
            label="Shipper Entity"
            onChange={handleShipperEntity}
            searchCallback={searchCallback}
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <FormAutocomplete
            required
            label="Shipper Project"
            name="shipperProject"
            fullWidth
            onChange={handleShipperEntity}
            searchCallback={searchCallback}
          />
        </Grid>

        <Grid xs={12} sm={6}>
          <TextField label="Shipper Personal Name" name="shipperName" fullWidth />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField label="Contact Number" name="shipperContactNumber" type="tel" fullWidth />
        </Grid>

        <Grid xs={12} sm={6}>
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
              // defaultValue="toPay"
              name="paymentType"
            >
              <FormControlLabel value="pay" control={<Radio />} label="Pay" />
              <FormControlLabel value="toPay" control={<Radio />} label="To Pay" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6}>
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
              name="pod"
            >
              <FormControlLabel value={true} control={<Radio />} label="POD Required" />
              <FormControlLabel value={false} control={<Radio />} label="Not Required" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6}>
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
              name="shipmentType"
            >
              <FormControlLabel value="spot" control={<Radio />} label="Spot" />
              <FormControlLabel value="contractual" control={<Radio />} label="Contractual" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6}>
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
              name="pricingType"
            >
              <FormControlLabel value="perVehicle" control={<Radio />} label="Per Vehicle" />
              <FormControlLabel value="perTonne" control={<Radio />} label="Per Tonne" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6}>
          <FormControl fullWidth>
            <FormControlLabel control={<Switch name="autoBitAcceptance" />} label="Auto Bid Acceptance" />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl fullWidth>
            <FormControlLabel
              control={<Switch name="autoBitNegotiation" />}
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
        </Grid>

        <Grid xs={12} sm={6}>
          <TextField label="Shipper Rate" name="shipperRate" fullWidth />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField label="Maximum Amount" name="maximumAmount" fullWidth />
        </Grid>
      </Grid>
    </Paper>
  );
}
