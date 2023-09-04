import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { SubmitHandler, ValidateResult, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  password: string;
  testPhone: string;
};

export default function HookForm(): React.ReactElement {
  console.log('🪝🪝🪝 HookForm Rendered');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { name: 'Default Name', password: 'Default Pass' },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('form Submitted', data);
  };

  // console.log(watch("example")); // watch input value by passing the name of it
  const isCorrect = (value: string, _formValues: Inputs): ValidateResult | Promise<ValidateResult> => {
    if (value.includes('valid')) return true;
    else return `Value must include the word "valid" `;

    return true; // Valid
    return 'Error Message!';
    // return new Promise<string | boolean>((res) => {
    //   setTimeout(() => {
    //     res(true); // Valid
    //     res("Async Error Message!");
    //   }, 5000);
    // });
  };
  console.log('errors', errors);
  return (
    <>
      <Box m={3}>
        <Typography variant="h4" align={'center'}>
          Hook Form
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <TextField
            // required
            label="Name"
            placeholder="Hello World"
            error={Boolean(errors.name)}
            helperText={errors.name ? errors.name?.message || 'Inline' : null}
            {...register('name', {
              validate: isCorrect,
            })}
          />
          <TextField
            required
            label="Password"
            type="password"
            error={Boolean(errors.password)}
            helperText={errors.password?.message ?? null}
            placeholder="********"
            {...register('password', {
              required: true,
            })}
          />
          <TextField
            label="Test Phone"
            // name="testPhone"
            fullWidth
            required
            inputProps={{
              pattern: '03[0-9]{9}',
              minlength: 11,
              maxlength: 11,
            }}
            // onBlur="this.reportValidity()"
            error={Boolean(errors.testPhone)}
            helperText={errors.testPhone?.message ?? null}
            {...register('testPhone', {
              pattern: RegExp(/^03[0-9]{9}$/),
              minLength: 11,
              maxLength: 11,
            })}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
}
