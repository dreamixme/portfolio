import { Button, Container, Stack, Typography } from '@mui/material';

import AppLink from '@/components/common/AppLink';

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ py: 12 }}>
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h2" fontWeight={800}>
          404
        </Typography>
        <Typography variant="h5">Page not found</Typography>
        <Typography color="text.secondary">
          The page you requested does not exist or has been moved.
        </Typography>
        <Button component={AppLink} href="/" variant="contained">
          Back home
        </Button>
      </Stack>
    </Container>
  );
}
