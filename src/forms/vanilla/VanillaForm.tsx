import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function VanillaForm(): React.ReactElement {
  console.log('🍦🍦🍦 VanillaForm Rendered');

  function formSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  }

  return (
    <>
      <Box m={3}>
        <Typography variant="h4" align={'center'}>
          Vanilla Form
        </Typography>
      </Box>
      <form onSubmit={formSubmit}>
        <Stack spacing={3}>
          <TextField required label="Name" name="name" placeholder="Hello World" />
          <TextField required label="Password" name="password" type="password" placeholder="********" />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
}
