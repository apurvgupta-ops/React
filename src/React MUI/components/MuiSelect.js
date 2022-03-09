import { TextField, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

export const MuiSelect = () => {
  const [country, setcountry] = useState("");
  console.log({ country });

  const handleChange = (e) => {
    setcountry(e.target.value);
  };

  return (
    <Box mt={2} width="250px">
      <TextField
        label="Select Items"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="AU">Austrlia</MenuItem>
        <MenuItem value="US">USA</MenuItem>
      </TextField>

      {/* <TextField
        SelectProps={{ multiple: true }}
        label="Select Multiple Items"
        helperText="Multiple Items"
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="AU">Austrlia</MenuItem>
        <MenuItem value="US">USA</MenuItem>
      </TextField> */}
    </Box>
  );
};
