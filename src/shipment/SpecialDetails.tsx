import ExpandMore from "@mui/icons-material/ExpandMore";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function SpecialDetails(): React.ReactElement {
  console.log("🔄 SpecialDetails Rendered");
  return (
    <Accordion variant="outlined" TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="SpecialDetails-content"
        id="SpecialDetails-header"
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <NoteAddOutlinedIcon color="info" />
          <Typography variant="h6">Special Details (Optional)</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <TextField label="Description" name="description" fullWidth />
      </AccordionDetails>
    </Accordion>
  );
}
