'use client';

import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StatusContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
}));

export const StatusContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
}));

export const StatusTitle = styled('h1')(({ theme }) => ({
  ...theme.typography.h2,
  margin: 0,
  fontWeight: 800,
}));

export const LoadingRoot = styled('div')({
  minHeight: '60vh',
  display: 'grid',
  placeItems: 'center',
});
