import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
  SelectChangeEvent,
} from "@mui/material";
import * as React from "react";

interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  options: string[];
}

const Select: React.FunctionComponent<Props> = (props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={props.id}>{props.label}</InputLabel>
      <MUISelect
        id={props.id}
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
