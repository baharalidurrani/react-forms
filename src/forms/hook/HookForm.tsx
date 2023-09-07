import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Controller, SubmitHandler, ValidateResult, useForm } from 'react-hook-form';
import FormAutocomplete from '../../shipment/FormAutocomplete';

type Inputs = {
  name: string;
  password: string;
  testPhone: string;
  controlled: string;
  id: number | '';
  city: string | '';
};

export default function HookForm(): React.ReactElement {
  console.log('🪝🪝🪝 HookForm Rendered');

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { name: 'Default Name', password: 'Default Pass', controlled: '', id: '', city: 'Islamabad' },
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
            inputProps={{
              pattern: '03[0-9]{9}',
              minLength: 11,
              maxLength: 11,
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
          <Controller
            name={'controlled'}
            control={control}
            rules={{ required: 'This field is required *' }}
            render={({ field: { onChange, value, ...fields } }) => (
              <TextField
                {...fields}
                label="Controlled"
                value={value + '*'}
                error={Boolean(errors.controlled)}
                helperText={errors.controlled?.message ?? null}
                onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                  onChange('*' + event.currentTarget.value);
                }}
              />
            )}
          />
          <Controller
            name={'id'}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="ID"
                type="number"
                error={Boolean(errors.id)}
                helperText={errors.id?.message ?? null}
              />
            )}
          />

          <Controller
            name={'city'}
            control={control}
            render={({ field: { onChange, ref, ...fields } }) => (
              <FormAutocomplete
                {...fields}
                error={Boolean(errors.city)}
                fullWidth
                helperText={errors.city?.message ?? null}
                inputRef={ref}
                label="City"
                options={['Islamabad', 'Lahore', 'Karachi', 'Rawalpindi', 'Faisalabad']}
                onChange={(_event: React.SyntheticEvent<Element, Event>, newValue: string | null) => {
                  onChange(newValue ? newValue : null);
                }}
              />
            )}
          />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
}
