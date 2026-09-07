'use client';

import { Button, Container, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container maxWidth="sm" sx={{ py: 12 }}>
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h3" fontWeight={800}>
          Something went wrong
        </Typography>
        <Typography color="text.secondary">
          An unexpected error occurred. You can retry this route without refreshing the whole app.
        </Typography>
        <Button onClick={reset} variant="contained">
          Try again
        </Button>
      </Stack>
    </Container>
  );
}
