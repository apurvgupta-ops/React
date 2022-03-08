import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";

export const MuiTextFields = () => {
  const [Values, setvalues] = useState({
    amount: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (props) => (event) => {
    setvalues({ ...Values, [props]: event.target.value });
  };

  const showpassword = () => {
    setvalues({ ...Values, showPassword: !Values.showPassword });
  };

  const showOffPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Stack spacing={4} style={{ margin: "20px" }}>
      <Stack spacing={2} direction="row">
        MuiTextFields
        <TextField label="Name" variant="filled" />
        <TextField label="Email" variant="outlined" />
        <TextField
          label="Password"
          helperText="Do not share your password"
          variant="standard"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Type" type="number" required />
        <TextField
          label="Error"
          error
          helperText="Incorrect"
          required
          defaultValue="Write Now"
        />
      </Stack>

      <Stack spacing={2}>
        <TextField
          label="Amount"
          onChange={handleChange("amount")}
          value={Values.amount}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Kg</InputAdornment>
            ),
          }}
        />
        <TextField
          label="Password"
          onChange={handleChange("password")}
          value={Values.password}
          type={Values.showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={showpassword}
                  onMouseDown={showOffPassword}
                >
                  {Values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
