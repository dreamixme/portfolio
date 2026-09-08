import { Box, Chip, Container, Stack, Typography } from '@mui/material';

import { StarterDemo } from '@/features/starter-demo/components/StarterDemo';

const stack = [
  'Next.js 16.3',
  'TypeScript 6',
  'MUI 9',
  'Axios',
  'Zustand',
  'RHF + Zod',
  'ESLint + Prettier',
];

export default function HomePage() {
  return (
    <Box component="main" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography
              component="h1"
              variant="h2"
              sx={{ fontSize: { xs: '2.25rem', sm: '3.75rem' } }}
            >
              Next.js + MUI Boilerplate
            </Typography>
            <Typography color="text.secondary" variant="h6">
              A minimal, feature-based starter with server components by default and explicit client
              boundaries only where interactivity is needed.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
              {stack.map((item) => (
                <Chip key={item} label={item} variant="outlined" />
              ))}
            </Stack>
          </Stack>

          <StarterDemo />
        </Stack>
      </Container>
    </Box>
  );
}
