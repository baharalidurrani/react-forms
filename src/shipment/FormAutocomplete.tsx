import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import debounce from '@mui/material/utils/debounce';
import * as React from 'react';

type TFormAutocompleteProps<T> = {
  label: string;
  name: string;
  required?: boolean;
  /** Must be provided in async use case. */
  searchCallback?: (keyword: string) => T[] | Promise<T[]>;
} & Partial<
  Pick<
    AutocompleteProps<T, undefined, undefined, undefined>,
    'disabled' | 'fullWidth' | 'options' | 'renderOption' | 'getOptionLabel' | 'onChange'
  >
>;

export default function FormAutocomplete<T>({
  disabled,
  label,
  name,
  required,
  fullWidth,
  options,
  renderOption,
  getOptionLabel,
  searchCallback,
  onChange,
}: TFormAutocompleteProps<T>): React.ReactElement {
  console.log('🔄 Rendered: FormAutocomplete', name || label);

  const [loading, setLoading] = React.useState(false);
  const [optionsState, setOptionsState] = React.useState(options || []);

  const handleInputChange = async (event: React.SyntheticEvent<Element, Event>, value: string): Promise<void> => {
    // Avoid duplicate calling on final onChange event.
    if (event.type !== 'change') return;
    setLoading(true);
    value && searchCallback && setOptionsState(await searchCallback(value));
    setLoading(false);
  };

  return (
    <Autocomplete
      disabled={disabled}
      disablePortal
      fullWidth={fullWidth}
      options={optionsState}
      renderOption={renderOption}
      getOptionLabel={getOptionLabel}
      onInputChange={searchCallback && debounce(handleInputChange, 500)}
      onChange={onChange}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          name={name}
          required={required}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading && <CircularProgress />}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
