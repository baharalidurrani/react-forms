import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function ContainerDetails(): React.ReactElement {
  console.log("🔄 ContainerDetails Rendered");
  return (
    <Accordion variant="outlined">
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
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
