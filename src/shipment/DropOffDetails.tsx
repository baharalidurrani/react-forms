import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormAutocomplete from './FormAutocomplete';

export default function DropOffDetails(): React.ReactElement {
  console.log('🔄 DropOffDetails Rendered');

  function handleCityChange(_event: React.SyntheticEvent<Element, Event>, value: string | null): void {
    console.log('handleCityChange', value);
  }

  return (
    <Paper variant="outlined" sx={{ height: '100%', padding: 2 }}>
      <Stack spacing={4}>
        <Stack direction="row" alignItems="center" gap={1}>
          <PinDropOutlinedIcon color="info" />
          <Typography variant="h6">Drop Off Details</Typography>
        </Stack>
        <FormAutocomplete
          label="Drop Off City"
          name="dropOffCity"
          fullWidth
          onChange={handleCityChange}
          options={['Islamabad', 'Lahore', 'Karachi', 'Rawalpindi', 'Faisalabad']}
        />
        <TextField label="Drop Off Address" name="dropOffAddress" fullWidth />
      </Stack>
    </Paper>
  );
}
