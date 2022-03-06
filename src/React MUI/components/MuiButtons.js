import { Button, Stack, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";

export const MuiButtons = () => {
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
      </Stack>
    </div>
  );
};
