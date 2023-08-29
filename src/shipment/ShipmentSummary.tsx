import InfoOutlined from '@mui/icons-material/InfoOutlined';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function ShipmentSummary(): React.ReactElement {
  console.log('🔄 ShipmentSummary Rendered');
  return (
    <Paper variant="outlined" sx={{ padding: 2 }}>
      <Stack spacing={4}>
        <Stack direction="row" alignItems="center" gap={1}>
          <InfoOutlined color="info" />
          <Typography variant="h6">Summary View</Typography>
        </Stack>
        <Alert severity="info">As you fill in the required fields, a summary of your shipment will appear here.</Alert>
        <Button type="submit" variant="contained" fullWidth>
          Post Your Request
        </Button>
      </Stack>
    </Paper>
  );
}
