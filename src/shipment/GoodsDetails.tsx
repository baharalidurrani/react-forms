import ExpandMore from '@mui/icons-material/ExpandMore';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function GoodsDetails(): React.ReactElement {
  console.log('🔄 GoodsDetails Rendered');
  return (
    <Accordion variant="outlined" TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls="GoodsDetails-content" id="GoodsDetails-header">
        <Stack direction="row" alignItems="center" gap={1}>
          <WindowOutlinedIcon color="info" />
          <Typography variant="h6">Goods</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
