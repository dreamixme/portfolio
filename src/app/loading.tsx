import { Box, CircularProgress } from '@mui/material';

export default function Loading() {
  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <CircularProgress aria-label="Loading" />
    </Box>
  );
}
