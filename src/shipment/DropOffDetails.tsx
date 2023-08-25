import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function DropOffDetails(): React.ReactElement {
  console.log("🔄 DropOffDetails Rendered");
  return (
    <Paper variant="outlined" sx={{ height: "100%", padding: 2 }}>
      <Stack spacing={4}>
        <Stack direction="row" alignItems="center" gap={1}>
          <PinDropOutlinedIcon color="info" />
          <Typography variant="h6">Drop Off Details</Typography>
        </Stack>
        <TextField label="Drop Off City" fullWidth />
        <TextField label="Drop Off Address" fullWidth />
      </Stack>
    </Paper>
  );
}
