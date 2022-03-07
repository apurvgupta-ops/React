import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import { Send } from "@mui/icons-material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";

export const MuiButtons = () => {
  const [formats, setFormats] = useState(null);
  console.log(formats);
  const handleChange = (event, newFormate) => {
    setFormats(newFormate);
  };
  return (
    <div>
      MuiButtons
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text">text</Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button color="primary" variant="outlined" href="https://google.com">
            primary
          </Button>
          <Button
            color="warning"
            variant="outlined"
            onClick={() => alert("Onclick works")}
          >
            warning
          </Button>
          <Button color="secondary" variant="outlined" centerRipple>
            secondary
          </Button>
          <Button color="success" variant="outlined" disableRipple>
            success
          </Button>
          <Button color="info" variant="outlined" size="medium">
            info
          </Button>
          <Button color="error" variant="outlined">
            error
          </Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button color="primary" variant="contained" startIcon={<Send />}>
            Send
          </Button>
          <Button color="primary" variant="contained" endIcon={<Send />}>
            Send
          </Button>
          <IconButton aria-label="send" color="info">
            <Send />
          </IconButton>
        </Stack>

        <Stack direction="row">
          <ButtonGroup variant="contained" orientation="vertical">
            <Button onClick={() => alert("leftCLicked")}>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="row">
          <ToggleButtonGroup
            aria-label="Toggle button"
            value={formats}
            onChange={handleChange}
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="colorFill" aria-label="ColorFill">
              <FormatColorFillIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
};
