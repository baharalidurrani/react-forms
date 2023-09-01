import CheckCircle from '@mui/icons-material/CheckCircle';
import ExpandMore from '@mui/icons-material/ExpandMore';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import ReactIcon from '../assets/react.svg';

const images = [
  ReactIcon,
  'vite.svg',
  ReactIcon,
  'vite.svg',
  ReactIcon,
  'vite.svg',
  ReactIcon,
  'vite.svg',
  ReactIcon,
  'vite.svg',
  ReactIcon,
  'vite.svg',
];

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
        <FormControl fullWidth>
          <RadioGroup
            row
            aria-labelledby="radio-buttons-goods-type"
            // defaultValue="toPay"
            name="goodsType"
          >
            <Grid container>
              {images.map((image, i) => (
                <Grid xs={6} md={2} display="flex" justifyContent="center" key={i}>
                  <FormControlLabel
                    key={i}
                    value={i}
                    label={'Good ' + i}
                    labelPlacement="bottom"
                    control={
                      <Radio
                        icon={
                          <Avatar
                            alt={'Good item number ' + i}
                            src={image}
                            sx={{ width: 70, height: 70, padding: 1 }}
                          />
                        }
                        checkedIcon={
                          <Avatar alt="selected" sx={{ width: 70, height: 70 }}>
                            <CheckCircle fontSize="large" color="primary" />
                          </Avatar>
                        }
                      />
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
}
