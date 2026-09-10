'use client';

import { Container, Typography } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

import { SpotlightBorder } from '@/components/common/SpotlightBorder';
import MuiButton from '@/components/Shared/MuiButton';

type ServiceTone = 'primary' | 'secondary' | 'purple' | 'success';

const chartPulse = keyframes`
  0%, 100% { transform: scaleY(0.76); opacity: 0.65; }
  50% { transform: scaleY(1); opacity: 1; }
`;

const phoneFloat = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-7deg); }
  50% { transform: translate3d(0, -7px, 0) rotate(-3deg); }
`;

const dataPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgb(52 211 153 / 38%); }
  70% { box-shadow: 0 0 0 10px rgb(52 211 153 / 0%); }
`;

const getToneColor = (tone: ServiceTone) => {
  if (tone === 'secondary') return '#F97316';
  if (tone === 'purple') return '#7C3AED';
  if (tone === 'success') return '#12B76A';
  return '#0648FB';
};

export const ServicesRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  paddingTop: theme.spacing(9),
  paddingBottom: theme.spacing(10),
  borderBottom: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: theme.vars.palette.background.default,

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -2,
    inset: 0,
    backgroundImage:
      'linear-gradient(rgb(6 72 251 / 2%) 1px, transparent 1px), linear-gradient(90deg, rgb(6 72 251 / 2%) 1px, transparent 1px)',
    backgroundSize: '52px 52px',
    maskImage: 'linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 720,
    height: 720,
    insetInlineStart: -380,
    top: '28%',
    borderRadius: '50%',
    background:
      'radial-gradient(circle, rgb(6 72 251 / 12%), rgb(124 58 237 / 5%) 48%, transparent 70%)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(13),
    paddingBottom: theme.spacing(14),
  },
}));

export const ServicesContainer = styled(Container)({
  position: 'relative',
});

export const ServicesHeader = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(5),
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(2.5),

  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(7),
    gridTemplateColumns: 'minmax(0, 1.18fr) minmax(330px, 0.82fr)',
    alignItems: 'end',
    gap: theme.spacing(6),
  },
}));

export const ServicesHeaderContent = styled('div')({
  minWidth: 0,
});

export const ServicesEyebrow = styled('span')(({ theme }) => ({
  minHeight: 34,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  paddingInline: theme.spacing(1.5),
  border: `1px solid rgba(${theme.vars.palette.primary.mainChannel} / 0.2)`,
  borderRadius: 999,
  color: theme.vars.palette.primary.main,
  backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.07)`,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.72rem',
  fontWeight: 800,
  letterSpacing: '0.04em',
  direction: 'ltr',

  '&::before': {
    content: '"04"',
    color: theme.vars.palette.secondary.main,
  },
}));

export const ServicesTitle = styled('h2')(({ theme }) => ({
  maxWidth: 760,
  marginTop: theme.spacing(2),
  marginBottom: 0,
  fontSize: '2.1rem',
  fontWeight: 900,
  lineHeight: 1.4,
  letterSpacing: '-0.03em',
  textWrap: 'balance',

  [theme.breakpoints.up('md')]: {
    fontSize: '3.2rem',
  },
}));

export const ServicesTitleAccent = styled('span')({
  color: 'transparent',
  background:
    'linear-gradient(115deg, var(--portfolio-palette-primary-main), #7C3AED 52%, var(--portfolio-palette-secondary-main))',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
});

export const ServicesAside = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    paddingInlineStart: theme.spacing(4),
    borderInlineStart: `1px solid ${theme.vars.palette.divider}`,
  },
}));

export const ServiceDescription = styled(Typography)(({ theme }) => ({
  color: theme.vars.palette.text.secondary,
}));

export const ServicesActionButton = styled(MuiButton)({});

export const ServicesGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(2.5),

  '& > div': {
    height: '100%',
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'minmax(0, 1.12fr) minmax(420px, 0.88fr)',
    alignItems: 'stretch',
    gap: theme.spacing(3),
  },
}));

export const PrimaryServiceCard = styled(SpotlightBorder)(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  height: '100%',
  minHeight: 560,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  border: '1px solid rgb(255 255 255 / 14%)',
  borderRadius: 28,
  color: '#FFFFFF',
  background:
    'radial-gradient(circle at 10% 6%, rgb(249 115 22 / 22%), transparent 31%), radial-gradient(circle at 90% 86%, rgb(124 58 237 / 38%), transparent 38%), linear-gradient(145deg, #071A54 0%, #0648FB 52%, #21104F 114%)',
  boxShadow: '0 30px 78px rgb(6 72 251 / 20%)',

  '&::before': {
    content: '"</>"',
    position: 'absolute',
    zIndex: -1,
    insetInlineEnd: -34,
    top: 70,
    color: 'rgb(255 255 255 / 5%)',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '9rem',
    fontWeight: 900,
    lineHeight: 1,
    direction: 'ltr',
    pointerEvents: 'none',
  },

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
    borderRadius: 34,
  },
}));

export const PrimaryServiceContent = styled('div')({
  position: 'relative',
  zIndex: 2,
});

export const PrimaryServiceHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
}));

export const PrimaryServiceIcon = styled('span')({
  width: 48,
  height: 48,
  display: 'grid',
  placeItems: 'center',
  border: '1px solid rgb(255 255 255 / 16%)',
  borderRadius: 15,
  color: '#FDBA74',
  backgroundColor: 'rgb(255 255 255 / 8%)',

  '& svg': {
    fontSize: 25,
  },
});

export const PrimaryServiceKicker = styled('span')({
  color: 'rgb(255 255 255 / 62%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.68rem',
  fontWeight: 800,
  letterSpacing: '0.1em',
});

export const PrimaryServiceTitle = styled('h3')(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1.25),
  color: '#FFFFFF',
  fontSize: '2rem',
  fontWeight: 900,
  lineHeight: 1.4,

  [theme.breakpoints.up('sm')]: {
    fontSize: '2.55rem',
  },
}));

export const PrimaryServiceDescription = styled(Typography)({
  maxWidth: 630,
  color: 'rgb(255 255 255 / 72%)',
});

export const ServiceCapabilities = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.75),
}));

export const ServiceCapability = styled('span')(({ theme }) => ({
  padding: theme.spacing(0.65, 1.1),
  border: '1px solid rgb(255 255 255 / 14%)',
  borderRadius: 999,
  color: 'rgb(255 255 255 / 74%)',
  backgroundColor: 'rgb(255 255 255 / 7%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.64rem',
  fontWeight: 700,
}));

export const BrowserWindow = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  overflow: 'hidden',
  width: 'min(92%, 590px)',
  minHeight: 220,
  marginTop: 'auto',
  marginInline: 'auto',
  border: '1px solid rgb(255 255 255 / 16%)',
  borderBottom: 0,
  borderRadius: '22px 22px 0 0',
  backgroundColor: 'rgb(3 12 43 / 72%)',
  boxShadow: '0 -12px 44px rgb(0 0 0 / 18%), 0 0 46px rgb(255 255 255 / 5%)',
  backdropFilter: 'blur(18px)',
  transform: 'translateY(32px)',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    minHeight: 195,
  },
}));

export const BrowserToolbar = styled('div')(({ theme }) => ({
  minHeight: 42,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.6),
  paddingInline: theme.spacing(1.5),
  borderBottom: '1px solid rgb(255 255 255 / 10%)',

  '& > span': {
    width: 7,
    height: 7,
    borderRadius: '50%',
    backgroundColor: '#FB7185',
  },

  '& > span:nth-of-type(2)': {
    backgroundColor: '#FBBF24',
  },

  '& > span:nth-of-type(3)': {
    backgroundColor: '#34D399',
  },
}));

export const BrowserNavigation = styled('span')(({ theme }) => ({
  minWidth: 0,
  maxWidth: 220,
  marginInlineStart: theme.spacing(1),
  overflow: 'hidden',
  padding: theme.spacing(0.45, 1),
  borderRadius: 7,
  color: 'rgb(255 255 255 / 48%)',
  backgroundColor: 'rgb(255 255 255 / 6%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.56rem',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

export const BrowserBody = styled('div')({
  minHeight: 178,
  display: 'grid',
  gridTemplateColumns: '78px minmax(0, 1fr)',
});

export const BrowserSidebar = styled('span')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2),
  borderInlineEnd: '1px solid rgb(255 255 255 / 8%)',
  backgroundColor: 'rgb(255 255 255 / 3%)',

  '& span': {
    height: 5,
    borderRadius: 999,
    backgroundColor: 'rgb(255 255 255 / 12%)',
  },

  '& span:first-of-type': {
    backgroundColor: '#6B8CFF',
  },
}));

export const BrowserContent = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: '1fr auto',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2),
}));

export const BrowserChart = styled('span')({
  position: 'relative',
  overflow: 'hidden',
  display: 'block',
  minHeight: 82,
  border: '1px solid rgb(255 255 255 / 8%)',
  borderRadius: 12,
  background:
    'linear-gradient(180deg, rgb(107 140 255 / 16%), transparent), repeating-linear-gradient(0deg, rgb(255 255 255 / 4%) 0 1px, transparent 1px 22px)',

  '&::before': {
    content: '""',
    position: 'absolute',
    right: '8%',
    bottom: 15,
    left: '8%',
    height: 42,
    borderTop: '2px solid #6B8CFF',
    borderRadius: '60% 40% 0 0',
    transform: 'skewY(-7deg)',
  },

  '& span': {
    position: 'absolute',
    insetInlineEnd: '18%',
    top: 24,
    width: 8,
    height: 8,
    border: '2px solid white',
    borderRadius: '50%',
    backgroundColor: '#F97316',
    animation: `${chartPulse} 2.4s ease-in-out infinite`,
  },

  '@media (prefers-reduced-motion: reduce)': {
    '& span': {
      animation: 'none',
    },
  },
});

export const BrowserCardGrid = styled('span')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: theme.spacing(1),
}));

export const BrowserCard = styled('span')({
  minHeight: 36,
  border: '1px solid rgb(255 255 255 / 8%)',
  borderRadius: 9,
  backgroundColor: 'rgb(255 255 255 / 5%)',
});

export const ServicesSideColumn = styled('div')(({ theme }) => ({
  minWidth: 0,
  display: 'grid',
  gap: theme.spacing(2.5),

  '& > div': {
    height: '100%',
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateRows: 'minmax(0, 1.08fr) minmax(0, 0.92fr)',
    gap: theme.spacing(3),
  },
}));

export const MobileServiceCard = styled(SpotlightBorder)(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  minHeight: 288,
  height: '100%',
  boxSizing: 'border-box',
  padding: theme.spacing(2.5),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 26,
  background: `linear-gradient(145deg, rgba(${theme.vars.palette.background.paperChannel} / 0.96), rgba(${theme.vars.palette.background.paperChannel} / 0.7))`,
  boxShadow: '0 20px 58px rgb(16 24 40 / 8%)',

  ...theme.applyStyles('dark', {
    boxShadow: '0 20px 58px rgb(0 0 0 / 22%)',
  }),

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
    borderRadius: 30,
  },
}));

export const ServiceCardHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
});

export const ServiceIcon = styled('span', {
  shouldForwardProp: (prop) => prop !== 'tone',
})<{ tone: ServiceTone }>(({ tone }) => {
  const color = getToneColor(tone);

  return {
    width: 48,
    height: 48,
    display: 'grid',
    placeItems: 'center',
    border: `1px solid color-mix(in srgb, ${color} 24%, transparent)`,
    borderRadius: 15,
    color,
    backgroundColor: `color-mix(in srgb, ${color} 9%, transparent)`,

    '& svg': {
      fontSize: 25,
    },
  };
});

export const ServiceNumber = styled('span')(({ theme }) => ({
  color: `rgba(${theme.vars.palette.text.primaryChannel} / 0.16)`,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '2.4rem',
  fontWeight: 900,
  lineHeight: 1,
}));

export const ServiceTitle = styled('h3')(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  marginTop: theme.spacing(2.5),
  marginBottom: theme.spacing(0.75),
  color: theme.vars.palette.text.primary,
  fontSize: '1.45rem',
  fontWeight: 900,
  lineHeight: 1.5,
}));

export const MobilePreview = styled('div')({
  position: 'absolute',
  zIndex: 1,
  insetInlineEnd: 22,
  bottom: -54,
  width: 180,
  height: 165,
  pointerEvents: 'none',
});

export const PhoneFrame = styled('span')({
  position: 'absolute',
  width: 84,
  height: 154,
  overflow: 'hidden',
  border: '4px solid #172554',
  borderRadius: 22,
  background: 'linear-gradient(160deg, #6B8CFF, #7C3AED)',
  boxShadow: '0 18px 34px rgb(15 23 42 / 24%)',
  animation: `${phoneFloat} 4.8s ease-in-out infinite`,

  '&:first-of-type': {
    insetInlineEnd: 14,
    top: 4,
    transform: 'rotate(-7deg)',
  },

  '&:last-of-type': {
    insetInlineStart: 13,
    top: 23,
    opacity: 0.72,
    transform: 'rotate(7deg) scale(0.92)',
    animationDelay: '-2.4s',
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
});

export const PhoneNotch = styled('span')({
  position: 'absolute',
  zIndex: 2,
  width: 34,
  height: 7,
  top: 5,
  left: '50%',
  borderRadius: 999,
  backgroundColor: '#172554',
  transform: 'translateX(-50%)',
});

export const PhoneScreen = styled('span')({
  position: 'absolute',
  inset: 16,
  display: 'grid',
  alignContent: 'start',
  gap: 8,

  '& span': {
    height: 7,
    borderRadius: 999,
    backgroundColor: 'rgb(255 255 255 / 58%)',
  },

  '& span:nth-of-type(2)': {
    width: '72%',
  },

  '& span:nth-of-type(3)': {
    width: '88%',
    height: 42,
    borderRadius: 10,
    backgroundColor: 'rgb(255 255 255 / 18%)',
  },
});

export const SideServicesGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(2.5),

  '& > div': {
    height: '100%',
  },

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },

  [theme.breakpoints.up('lg')]: {
    gap: theme.spacing(3),
  },
}));

export const CompactServiceCard = styled(SpotlightBorder)(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  minHeight: 245,
  height: '100%',
  boxSizing: 'border-box',
  padding: theme.spacing(2.5),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 24,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.78)`,
  boxShadow: '0 16px 44px rgb(16 24 40 / 7%)',
  backdropFilter: 'blur(18px) saturate(145%)',
  WebkitBackdropFilter: 'blur(18px) saturate(145%)',

  ...theme.applyStyles('dark', {
    backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.65)`,
    boxShadow: '0 16px 44px rgb(0 0 0 / 20%)',
  }),
}));

export const CompactServiceIcon = styled(ServiceIcon)({
  width: 42,
  height: 42,

  '& svg': {
    fontSize: 22,
  },
});

export const CompactServiceNumber = styled(ServiceNumber)({
  fontSize: '1.8rem',
});

export const CompactServiceTitle = styled(ServiceTitle)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: '1.05rem',
}));

export const CompactServiceDescription = styled(ServiceDescription)({
  position: 'relative',
  zIndex: 2,
  fontSize: '0.76rem',
  lineHeight: 1.75,
});

export const ArchitectureDiagram = styled('div')({
  position: 'absolute',
  zIndex: 1,
  width: 126,
  height: 64,
  insetInlineEnd: 20,
  bottom: 17,

  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    backgroundColor: 'rgb(124 58 237 / 28%)',
  },

  '&::before': {
    right: 20,
    left: 20,
    top: '50%',
    height: 1,
  },

  '&::after': {
    top: 10,
    bottom: 10,
    left: '50%',
    width: 1,
  },
});

export const ArchitectureNode = styled('span')({
  position: 'absolute',
  width: 14,
  height: 14,
  border: '3px solid color-mix(in srgb, #7C3AED 22%, transparent)',
  borderRadius: 5,
  backgroundColor: '#7C3AED',
  boxShadow: '0 0 14px rgb(124 58 237 / 28%)',

  '&:nth-of-type(1)': { top: 2, left: 8 },
  '&:nth-of-type(2)': { top: 2, right: 8 },
  '&:nth-of-type(3)': { bottom: 2, left: 8 },
  '&:nth-of-type(4)': { right: 8, bottom: 2 },
});

export const IntegrationDiagram = styled('div')({
  position: 'absolute',
  zIndex: 1,
  width: 128,
  height: 74,
  insetInlineEnd: 18,
  bottom: 12,

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 12,
    background:
      'linear-gradient(28deg, transparent 49%, rgb(18 183 106 / 28%) 50%, transparent 51%), linear-gradient(-28deg, transparent 49%, rgb(18 183 106 / 28%) 50%, transparent 51%)',
  },

  '& > span': {
    position: 'absolute',
    width: 9,
    height: 9,
    borderRadius: '50%',
    backgroundColor: '#34D399',
  },

  '& > span:nth-of-type(1)': { top: 4, left: 8 },
  '& > span:nth-of-type(2)': { top: 4, right: 8 },
  '& > span:nth-of-type(3)': { bottom: 4, left: 8 },
  '& > span:nth-of-type(4)': { right: 8, bottom: 4 },
});

export const IntegrationHub = styled('strong')({
  position: 'absolute',
  zIndex: 2,
  width: 46,
  height: 46,
  inset: 0,
  margin: 'auto',
  display: 'grid',
  placeItems: 'center',
  border: '1px solid rgb(52 211 153 / 30%)',
  borderRadius: 15,
  color: '#12B76A',
  backgroundColor: 'rgb(18 183 106 / 10%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.66rem',
  animation: `${dataPulse} 2.6s ease-out infinite`,

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
});

export const ProcessPanel = styled(SpotlightBorder)(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  marginTop: theme.spacing(2.5),
  padding: theme.spacing(2.5),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 26,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.72)`,
  boxShadow: '0 18px 50px rgb(16 24 40 / 7%)',
  backdropFilter: 'blur(18px) saturate(145%)',
  WebkitBackdropFilter: 'blur(18px) saturate(145%)',

  ...theme.applyStyles('dark', {
    backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.62)`,
    boxShadow: '0 18px 50px rgb(0 0 0 / 20%)',
  }),

  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3.5),
    display: 'grid',
    gridTemplateColumns: '230px minmax(0, 1fr)',
    alignItems: 'center',
    gap: theme.spacing(4),
  },
}));

export const ProcessTitle = styled('h3')(({ theme }) => ({
  marginTop: 0,
  marginBottom: theme.spacing(2.5),
  color: theme.vars.palette.text.primary,
  fontSize: '1.2rem',
  fontWeight: 900,
  lineHeight: 1.5,

  '& span': {
    display: 'block',
    marginBottom: theme.spacing(0.5),
    color: theme.vars.palette.primary.main,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '0.62rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    textAlign: 'right',
  },

  [theme.breakpoints.up('lg')]: {
    marginBottom: 0,
  },
}));

export const ProcessList = styled('ol')(({ theme }) => ({
  margin: 0,
  padding: 0,
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(2),
  listStyle: 'none',

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: theme.spacing(2.5),
  },
}));

export const ProcessItem = styled('li')(({ theme }) => ({
  position: 'relative',
  minWidth: 0,
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
}));

export const ProcessNumber = styled('span')(({ theme }) => ({
  width: 32,
  height: 32,
  display: 'grid',
  flexShrink: 0,
  placeItems: 'center',
  border: `1px solid rgba(${theme.vars.palette.primary.mainChannel} / 0.2)`,
  borderRadius: 10,
  color: theme.vars.palette.primary.main,
  backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.08)`,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.64rem',
  fontWeight: 900,
}));

export const ProcessContent = styled('span')(({ theme }) => ({
  minWidth: 0,

  '& strong, & span': {
    display: 'block',
  },

  '& strong': {
    color: theme.vars.palette.text.primary,
    fontSize: '0.78rem',
    fontWeight: 900,
  },

  '& span': {
    marginTop: 3,
    color: theme.vars.palette.text.secondary,
    fontSize: '0.66rem',
    lineHeight: 1.7,
  },
}));

export const ProcessConnector = styled('span')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('lg')]: {
    position: 'absolute',
    top: 15,
    insetInlineEnd: -18,
    width: 14,
    height: 1,
    display: 'block',
    background:
      'linear-gradient(90deg, transparent, var(--portfolio-palette-primary-main), transparent)',
  },
}));
