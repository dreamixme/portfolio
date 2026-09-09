'use client';

import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SpotlightBorder } from '@/components/common/SpotlightBorder';

export const SectionRoot = styled('section', {
  shouldForwardProp: (prop) => prop !== 'alternate',
})<{ alternate: boolean }>(({ alternate, theme }) => ({
  minHeight: 360,
  display: 'grid',
  placeItems: 'center',
  paddingTop: theme.spacing(7),
  paddingBottom: theme.spacing(7),
  borderBottom: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: alternate ? theme.vars.palette.background.paper : 'transparent',

  [theme.breakpoints.up('md')]: {
    minHeight: 430,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

export const SectionContainer = styled(Container)({});

export const SectionCard = styled(SpotlightBorder, {
  shouldForwardProp: (prop) => prop !== 'sectionNumber',
})<{ sectionNumber: string }>(({ sectionNumber, theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(3),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: theme.spacing(4),
  backgroundColor: theme.vars.palette.background.default,

  '&::after': {
    content: `"${sectionNumber}"`,
    position: 'absolute',
    insetInlineEnd: 20,
    bottom: -22,
    color: theme.vars.palette.primary.main,
    opacity: 0.08,
    fontSize: '6rem',
    fontWeight: 900,
    lineHeight: 1,
    direction: 'ltr',
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
    borderRadius: theme.spacing(6),

    '&::after': {
      insetInlineEnd: 36,
      bottom: -40,
      fontSize: '10rem',
    },
  },
}));

export const SectionEyebrow = styled(Typography)(({ theme }) => ({
  color: theme.vars.palette.primary.main,
}));

export const SectionTitle = styled('h2')(({ theme }) => ({
  ...theme.typography.h2,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1.5),
}));

export const SectionDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 680,
  color: theme.vars.palette.text.secondary,
}));
