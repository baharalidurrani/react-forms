import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Controller, SubmitHandler, ValidateResult, useForm } from 'react-hook-form';
import FormAutocomplete from '../../shipment/FormAutocomplete';
import { OrType } from '../../utils/utilityTypes.type';

type TCity = {
  id: number;
  label: string;
};
const CITIES: TCity[] = [
  { id: 1, label: 'Islamabad' },
  { id: 2, label: 'Karachi' },
  { id: 3, label: 'Lahore' },
  { id: 4, label: 'Peshawar' },
  { id: 5, label: 'Faisalabad' },
  { id: 6, label: 'Charsadda' },
];

type Inputs = {
  name: string;
  password: string;
  testPhone: string;
  controlled: string;
  id: number;
  city: TCity;
};

type EmptyInputs = OrType<Inputs, null | ''>;

export default function HookForm(): React.ReactElement {
  console.log('🪝🪝🪝 HookForm Rendered');

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmptyInputs>({
    defaultValues: {
      name: 'Default Name',
      password: 'Default Pass',
      testPhone: '',
      controlled: '',
      id: '',
      city: CITIES[1] /*or null*/,
    },
  });

  const onSubmit: SubmitHandler<EmptyInputs> = (data) => {
    console.log('form Submitted', data);
  };

  // console.log(watch("example")); // watch input value by passing the name of it
  const isCorrect = (value: string | null, _formValues: EmptyInputs): ValidateResult | Promise<ValidateResult> => {
    if (value?.includes('valid')) return true;
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
          <Controller
            name={'testPhone'}
            control={control}
            rules={{
              pattern: RegExp(/^03[0-9]{9}$/),
              minLength: 11,
              maxLength: 11,
            }}
            render={({ field: { onChange, ...fields } }) => (
              <TextField
                {...fields}
                onChange={(e) => {
                  e.currentTarget.reportValidity();
                  onChange(e.currentTarget.value.replace(/\D/g, ''));
                }}
                label="Test Phone"
                fullWidth
                inputProps={{
                  pattern: '03[0-9]{9}',
                  minLength: 11,
                  maxLength: 11,
                }}
                error={Boolean(errors.testPhone)}
                helperText={errors.testPhone?.message ?? null}
              />
            )}
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
            render={({ field: { onChange, ref, value, ...fields } }) => (
              <FormAutocomplete
                {...fields}
                error={Boolean(errors.city)}
                fullWidth
                helperText={errors.city?.message ?? null}
                inputRef={ref}
                label="City"
                value={value}
                isOptionEqualToValue={(o, v) => Boolean(o && v && o.id === v.id)}
                options={CITIES.length ? CITIES : value ? [value] : []}
                getOptionLabel={(option) => option && option.label}
                onChange={(_, newValue) => onChange(newValue)}
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
