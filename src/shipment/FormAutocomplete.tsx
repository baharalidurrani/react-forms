import Autocomplete, { type AutocompleteProps } from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField, { type TextFieldProps } from '@mui/material/TextField';
import debounce from '@mui/material/utils/debounce';
import * as React from 'react';
import { useEffect, useState } from 'react';

type TFormAutocompleteProps<T> = {
  /**
   * After effects of this prop will reset the value to null.
   * @see https://stackoverflow.com/a/59845474/9486457
   */
  resetValueEffect?: string | number | null | undefined;
  /** Must be provided in async use case. */
  searchCallback?: (_keyword: string) => T[] | Promise<T[]>;
} & Partial<
  Pick<
    AutocompleteProps<T, undefined, undefined, undefined>,
    | 'disabled'
    | 'fullWidth'
    | 'getOptionLabel'
    | 'isOptionEqualToValue'
    | 'onBlur'
    | 'onChange'
    | 'options'
    | 'renderOption'
    | 'value'
  >
> &
  Pick<TextFieldProps, 'error' | 'helperText' | 'inputRef' | 'label' | 'name' | 'required'>;

export default function FormAutocomplete<T>({
  disabled,
  error,
  fullWidth,
  getOptionLabel,
  helperText,
  inputRef,
  isOptionEqualToValue,
  label,
  name,
  onBlur,
  onChange,
  options,
  renderOption,
  required,
  resetValueEffect,
  searchCallback,
  value,
}: TFormAutocompleteProps<T>): React.ReactElement {
  console.log('🔄 FormAutocomplete Rendered', name || label);

  const [loading, setLoading] = useState(false);
  const [optionsState, setOptionsState] = useState(options || []);
  useEffect(() => {
    options && setOptionsState(options);
  }, [options]);

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
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      key={resetValueEffect}
      loading={loading}
      onBlur={onBlur}
      onChange={onChange}
      onInputChange={searchCallback && debounce(handleInputChange, 500)}
      options={optionsState}
      renderOption={renderOption}
      value={value}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          helperText={helperText}
          inputRef={inputRef}
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
