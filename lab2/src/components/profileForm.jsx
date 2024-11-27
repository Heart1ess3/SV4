import React from "react";
import { Button, Box, Typography, FormControl, InputLabel, OutlinedInput } from "@mui/material";

function ProfileForm({ profile, handleChange, handleSubmit }) {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <Typography variant="h4" component="h2" sx={{ marginBottom: "20px", color: "#007bff" }}>
        Profile Form
      </Typography>

      {Object.keys(profile).map((key) => (
        <FormControl key={key} variant="outlined" fullWidth>
          <InputLabel htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</InputLabel>
          <OutlinedInput
            id={key}
            name={key}
            type={key === "age" ? "number" : "text"}
            value={profile[key]}
            onChange={handleChange}
            inputProps={key === "age" ? { min: 0 } : {}}
          />
        </FormControl>
      ))}

      <Button variant="contained" type="submit">
        Save Changes
      </Button>
    </Box>
  );
}

export default ProfileForm;
