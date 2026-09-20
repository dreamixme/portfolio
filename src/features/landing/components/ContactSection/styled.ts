import { Container, Typography } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

type ContactTone = 'primary' | 'secondary' | 'purple';

const availabilityPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgb(52 211 153 / 42%); }
  70%, 100% { box-shadow: 0 0 0 9px rgb(52 211 153 / 0%); }
`;

const codeFloat = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-6deg); }
  50% { transform: translate3d(0, -8px, 0) rotate(2deg); }
`;

export const ContactRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  paddingTop: theme.spacing(9),
  paddingBottom: theme.spacing(9),
  borderBottom: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: theme.vars.palette.background.paper,

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -2,
    inset: 0,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 760,
    height: 760,
    insetInlineStart: -380,
    bottom: -460,
    borderRadius: '50%',
    background:
      'radial-gradient(circle, rgb(124 58 237 / 14%), rgb(6 72 251 / 6%) 46%, transparent 70%)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(10),
  },
}));

export const ContactContainer = styled(Container)({
  position: 'relative',
});

export const ContactHeader = styled('div')(({ theme }) => ({
  maxWidth: 820,
  marginInline: 'auto',
  marginBottom: theme.spacing(5),
  textAlign: 'center',

  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(7),
  },
}));

export const ContactTitle = styled('h2')(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1.5),
  fontSize: '2.15rem',
  fontWeight: 900,
  lineHeight: 1.4,
  letterSpacing: '-0.03em',
  textWrap: 'balance',

  [theme.breakpoints.up('md')]: {
    fontSize: '3.35rem',
  },
}));

export const ContactTitleAccent = styled('span')({
  color: 'transparent',
  background:
    'linear-gradient(115deg, var(--portfolio-palette-primary-main), #7C3AED 52%, var(--portfolio-palette-secondary-main))',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
});

export const ContactLead = styled(Typography)(({ theme }) => ({
  maxWidth: 690,
  marginInline: 'auto',
  color: theme.vars.palette.text.secondary,
}));

export const ContactCardFrame = styled('div')({
  width: '100%',
  maxWidth: 1080,
  marginInline: 'auto',
});

export const ContactInfoPanel = styled('div')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  boxSizing: 'border-box',
  padding: theme.spacing(3),
  border: '1px solid rgb(255 255 255 / 14%)',
  borderRadius: 28,
  color: '#FFFFFF',
  background:
    'radial-gradient(circle at 8% 6%, rgb(249 115 22 / 24%), transparent 30%), radial-gradient(circle at 96% 90%, rgb(124 58 237 / 36%), transparent 35%), linear-gradient(145deg, #071A54 0%, #0A3DC7 50%, #21104F 112%)',
  boxShadow: '0 30px 76px rgb(6 72 251 / 20%)',

  '&::before': {
    content: '"@"',
    position: 'absolute',
    zIndex: -1,
    insetInlineEnd: -38,
    bottom: -90,
    color: 'rgb(255 255 255 / 5%)',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '18rem',
    fontWeight: 900,
    lineHeight: 1,
    direction: 'ltr',
  },

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4.5),
    borderRadius: 34,
  },
}));

export const ContactCardHeader = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
}));

export const AvailabilityBadge = styled('span')(({ theme }) => ({
  width: 'fit-content',
  minHeight: 36,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  paddingInline: theme.spacing(1.25),
  border: '1px solid rgb(255 255 255 / 14%)',
  borderRadius: 999,
  color: 'rgb(255 255 255 / 78%)',
  backgroundColor: 'rgb(255 255 255 / 8%)',
  fontSize: theme.typography.caption.fontSize,
  backdropFilter: 'blur(12px)',
}));

export const AvailabilityDot = styled('span')({
  width: 8,
  height: 8,
  flexShrink: 0,
  borderRadius: '50%',
  backgroundColor: '#34D399',
  animation: `${availabilityPulse} 2.2s ease-out infinite`,

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
});

export const ContactInfoTitle = styled('h3')(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1.5),
  color: '#FFFFFF',
  fontSize: '2rem',
  fontWeight: 900,
  lineHeight: 1.45,
  textWrap: 'balance',

  [theme.breakpoints.up('sm')]: {
    fontSize: '2.125rem',
  },
}));

export const ContactInfoDescription = styled(Typography)({
  maxWidth: 650,
  color: 'rgb(255 255 255 / 70%)',
});

export const ContactCodeStamp = styled('span')(({ theme }) => ({
  display: 'none',
  flexShrink: 0,
  marginTop: theme.spacing(1),
  padding: theme.spacing(1, 1.4),
  border: '1px solid rgb(255 255 255 / 14%)',
  borderRadius: 14,
  color: 'rgb(255 255 255 / 64%)',
  backgroundColor: 'rgb(255 255 255 / 7%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.76rem',
  direction: 'ltr',
  backdropFilter: 'blur(10px)',
  animation: `${codeFloat} 5s ease-in-out infinite`,

  [theme.breakpoints.up('sm')]: {
    display: 'inline-flex',
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));

export const ContactMethods = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  marginTop: theme.spacing(4),
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(1.25),

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
}));

export const ContactMethodLink = styled('a')(({ theme }) => ({
  minWidth: 0,
  minHeight: 76,
  display: 'grid',
  gridTemplateColumns: 'auto minmax(0, 1fr) auto',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  padding: theme.spacing(1.25),
  border: '1px solid rgb(255 255 255 / 12%)',
  borderRadius: 18,
  color: '#FFFFFF',
  backgroundColor: 'rgb(255 255 255 / 7%)',
  textDecoration: 'none',
  backdropFilter: 'blur(12px)',
  transition: theme.transitions.create(['border-color', 'background-color', 'transform'], {
    duration: theme.transitions.duration.short,
  }),

  '&:hover': {
    borderColor: 'rgb(255 255 255 / 28%)',
    backgroundColor: 'rgb(255 255 255 / 11%)',
    transform: 'translateY(-4px)',
  },

  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',

    '&:hover': {
      transform: 'none',
    },
  },
}));

export const ContactMethodIcon = styled('span', {
  shouldForwardProp: (prop) => prop !== 'tone',
})<{ tone: ContactTone }>(({ tone }) => {
  const color = tone === 'secondary' ? '#FDBA74' : tone === 'purple' ? '#C4B5FD' : '#AFC1FF';

  return {
    width: 44,
    height: 44,
    display: 'grid',
    flexShrink: 0,
    placeItems: 'center',
    border: `1px solid color-mix(in srgb, ${color} 26%, transparent)`,
    borderRadius: 14,
    color,
    backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`,

    '& svg': {
      fontSize: 22,
    },
  };
});

export const ContactMethodText = styled('span')({
  minWidth: 0,
});

export const ContactMethodLabel = styled('span')({
  display: 'block',
  marginBottom: 2,
  color: 'rgb(255 255 255 / 56%)',
  fontSize: '0.7rem',
});

export const ContactMethodValue = styled('span')(({ theme }) => ({
  display: 'block',
  overflow: 'hidden',
  color: '#FFFFFF',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.72rem',
  fontWeight: 700,
  lineHeight: 1.55,
  textAlign: 'right',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  [theme.breakpoints.up('sm')]: {
    fontSize: '0.78rem',
  },
}));

export const ContactMethodArrow = styled('span')(({ theme }) => ({
  width: 32,
  height: 32,
  display: 'grid',
  placeItems: 'center',
  borderRadius: 10,
  color: 'rgb(255 255 255 / 52%)',
  backgroundColor: 'rgb(255 255 255 / 6%)',
  transition: theme.transitions.create(['color', 'transform']),

  'a:hover &': {
    color: '#FFFFFF',
    transform: 'translate(-2px, -2px)',
  },

  '& svg': {
    fontSize: 18,
  },
}));

export const ContactLocation = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  marginTop: theme.spacing(3),
  paddingTop: theme.spacing(2.5),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  borderTop: '1px solid rgb(255 255 255 / 10%)',
  color: 'rgb(255 255 255 / 60%)',
  fontSize: '0.7rem',
  direction: 'ltr',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
}));

export const LocationText = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  direction: 'rtl',

  '& svg': {
    color: '#FDBA74',
    fontSize: 19,
  },
}));
