import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import debounce from "@mui/material/utils/debounce";
import * as React from "react";

type TFormAutocompleteProps<T> = {
  label: string;
  name: string;
  required?: boolean;
  fullWidth?: boolean;
  options?: T[];
  searchCallback?: (keyword: string) => T[] | Promise<T[]>;
  onChange: (
    _event: React.SyntheticEvent<Element, Event>,
    value: T | null
  ) => void;
};

export default function FormAutocomplete<T>({
  label,
  name,
  required,
  fullWidth,
  options,
  searchCallback,
  onChange,
}: TFormAutocompleteProps<T>): React.ReactElement {
  console.log("🔄 Rendered: FormAutocomplete");

  const [loading, setLoading] = React.useState(false);
  const [optionsState, setOptionsState] = React.useState<T[]>(options || []);

  const handleInputChange = async (
    _event: React.SyntheticEvent<Element, Event>,
    value: string
  ): Promise<void> => {
    setLoading(true);
    value && searchCallback && setOptionsState(await searchCallback(value));
    setLoading(false);
  };

  return (
    <Autocomplete
      disablePortal
      fullWidth={fullWidth}
      options={optionsState}
      onInputChange={searchCallback && debounce(handleInputChange, 500)}
      onChange={onChange}
      loading={loading}
      renderInput={(params) => (
        <TextField {...params} label={label} name={name} required={required} />
      )}
    />
  );
}
