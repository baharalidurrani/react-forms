import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FormAutocomplete from './FormAutocomplete';

export default function PickupDetails(): React.ReactElement {
  console.log('🔄 PickupDetails Rendered');

  function handleCityChange(_event: React.SyntheticEvent<Element, Event>, value: string | null): void {
    console.log('handleCityChange', value);
  }

  return (
    <Paper variant="outlined" sx={{ height: '100%', padding: 2 }}>
      <Stack spacing={4}>
        <Stack direction="row" alignItems="center" gap={1}>
          <PlaceOutlinedIcon color="info" />
          <Typography variant="h6">Pickup Details</Typography>
        </Stack>
        <TextField label="Pickup City" name="pickupCity" fullWidth />
        <FormAutocomplete
          label="Pickup City"
          name="pickupCity"
          fullWidth
          onChange={handleCityChange}
          options={['Karachi', 'Lahore', 'Islamabad', 'Faisalabad', 'Rawalpindi']}
        />
        <TextField label="Pickup Address" name="pickupAddress" fullWidth />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker label="Date & Time" disablePast />
        </LocalizationProvider>
      </Stack>
    </Paper>
  );
}
