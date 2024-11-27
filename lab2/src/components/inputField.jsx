import React from "react";
import { TextField } from "@mui/material";

function InputField({ label, type, name, value, onChange }) {
  return (
    <TextField
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
      InputProps={{
        sx: {
          borderRadius: "5px",
        },
      }}
    />
  );
}

export default InputField;
