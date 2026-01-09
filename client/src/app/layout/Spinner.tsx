// src/components/Spinner.tsx
import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

type SpinnerProps = {
  message?: string;
};

export default function Spinner({ message = "Loading..." }: SpinnerProps) {
  return (
    <Backdrop open invisible aria-busy="true" aria-live="polite" role="status">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          textAlign: "center",
          px: 2,
        }}
      >
        <CircularProgress size={100} color="secondary" thickness={4} />
        <Typography variant="h4" component="p">
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
}
