import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

export default function ContainerDetails(): React.ReactElement {
  console.log("🔄 ContainerDetails Rendered");
  return (
    <Accordion variant="outlined" TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="ContainerDetails-content"
        id="ContainerDetails-header"
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <CorporateFareIcon color="info" />
          <Typography variant="h6">Container Details (Optional)</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={4}>
          <Grid xs={6}>
            <TextField label="BL Number" name="blNumber" fullWidth />
          </Grid>
          <Grid xs={6}>
            <TextField label="Return Date" name="returnDate" fullWidth />
          </Grid>
          <Grid xs={6}>
            <TextField
              label="Detention Charges Per Day"
              name="detentionCharges"
              fullWidth
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              label="Number of Containers"
              name="numberOfContainers"
              fullWidth
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              label="Return Location"
              name="returnLocation"
              fullWidth
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
