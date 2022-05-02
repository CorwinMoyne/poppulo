import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
  SelectChangeEvent,
} from "@mui/material";
import * as React from "react";

interface Props {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  options: string[];
}

const Select: React.FunctionComponent<Props> = (props) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <MUISelect
        value={props.value}
        label={props.label}
        onChange={props.onChange}
      >
        {props.options?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
