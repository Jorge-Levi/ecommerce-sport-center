// src/pages/NotFound.tsx
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Stack spacing={{ xs: 2, sm: 2.5 }} alignItems="center">
            <Box
              component="img"
              src="/images/page-not-found.png"
              alt="404 Not Found"
              loading="lazy"
              decoding="async"
              sx={{
                width: "min(360px, 100%)",
                height: "auto",
                mb: { xs: 0.5, sm: 1 },
                userSelect: "none",
              }}
            />

            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              Oops! Page not found.
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", maxWidth: 420 }}
            >
              We can't seem to find the page you're looking for.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={handleGoHome}
              size="large"
              sx={{ mt: 1, px: 3, borderRadius: 2 }}
            >
              Go Home
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
