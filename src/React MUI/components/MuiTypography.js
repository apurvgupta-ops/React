import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      MuiTypography
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2" component="h1" gutterBottom>
        h2 heading
      </Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4">h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>
      <Typography variant="body1">Body1</Typography>
      <Typography variant="body2">Body2</Typography>
    </div>
  );
};
