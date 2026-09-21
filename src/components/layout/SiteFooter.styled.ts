'use client';

import { Container } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

import MuiButton from '@/components/Shared/MuiButton';

const availabilityPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgb(50 213 131 / 42%); }
  55% { box-shadow: 0 0 0 9px rgb(50 213 131 / 0%); }
`;

export const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  color: '#F7F8FC',
  background:
    'radial-gradient(circle at 88% 12%, rgb(6 72 251 / 24%), transparent 28%), radial-gradient(circle at 6% 84%, rgb(249 115 22 / 13%), transparent 27%), linear-gradient(145deg, #080B12 0%, #070A11 44%, #0A1020 100%)',

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -2,
    inset: 0,
    backgroundImage:
      'linear-gradient(rgb(255 255 255 / 3.5%) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 3.5%) 1px, transparent 1px)',
    backgroundSize: '64px 64px',
    maskImage: 'linear-gradient(to bottom, black, transparent 72%)',
  },

  '&::after': {
    content: '"PEYMAN"',
    position: 'absolute',
    zIndex: -1,
    insetInlineEnd: '-0.04em',
    bottom: '-0.18em',
    color: 'rgb(255 255 255 / 2.4%)',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: 'clamp(8rem, 23vw, 24rem)',
    fontWeight: 900,
    lineHeight: 0.8,
    letterSpacing: '-0.08em',
    direction: 'ltr',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    '&::before': {
      backgroundSize: '44px 44px',
    },
  },
}));

export const FooterContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(9),
  paddingBottom: theme.spacing(3),

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(4),
  },
}));

export const FooterBlocks = styled(Container)(({ theme }) => ({
  display: 'flex',
  direction: 'ltr',
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',

    '& > *': {
      margin: '0 auto',
    },
    '& > *:first-child': {
      marginBottom: '2rem',
    },
  },
}));

export const FooterHero = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'end',
  gap: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(8),
  },
}));

export const FooterHeroCopy = styled('div')({
  minWidth: 0,
  width: '100%',
  justifyContent: 'center',
});

export const FooterAvailability = styled('span')(({ theme }) => ({
  width: 'fit-content',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: 'rgb(255 255 255 / 56%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.66rem',
  fontWeight: 800,
  letterSpacing: '0.1em',
  direction: 'ltr',

  '& > span': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '#32D583',
    animation: `${availabilityPulse} 2.5s ease-out infinite`,
  },

  '@media (prefers-reduced-motion: reduce)': {
    '& > span': {
      animation: 'none',
    },
  },
}));

export const FooterHeadline = styled('h2')(({ theme }) => ({
  maxWidth: '100%',
  marginBlock: theme.spacing(2, 1.5),
  color: '#FFFFFF',
  fontSize: 'clamp(1.5rem, 2vw, 2.25rem)',
  fontWeight: 900,
  lineHeight: 1.18,
  letterSpacing: '-0.055em',
  textWrap: 'balance',
  textAlign: 'center',
}));

export const FooterHeadlineAccent = styled('span')({
  color: 'transparent',
  background: 'linear-gradient(115deg, #6B8CFF 4%, #A68AF8 48%, #FB923C 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
});

export const FooterLead = styled('p')(({ theme }) => ({
  maxWidth: '100%',
  textAlign: 'center',
  margin: 0,
  color: 'rgb(255 255 255 / 58%)',
  fontSize: '0.96rem',
  lineHeight: 1.95,

  [theme.breakpoints.up('md')]: {
    fontSize: '1.04rem',
  },
}));

export const FooterHeroAction = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  marginTop: theme.spacing(1),

  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(1),
  },
}));

export const FooterPrimaryButton = styled(MuiButton)(({ theme }) => ({
  minHeight: 62,
  paddingInline: theme.spacing(3.2),
  borderRadius: 999,
  color: '#FFFFFF',
  margin: '1rem auto 0 auto',
  background: 'linear-gradient(115deg, #0648FB, #6B5CF6 62%, #7C3AED)',
  boxShadow: '0 18px 44px rgb(6 72 251 / 34%)',
  transition: theme.transitions.create(['transform', 'box-shadow', 'filter'], {
    duration: 280,
  }),

  '&:hover': {
    background: 'linear-gradient(115deg, #1757FF, #796AF8 62%, #8B4EEA)',
    boxShadow: '0 24px 58px rgb(6 72 251 / 44%)',
    filter: 'saturate(1.12)',
  },

  '& .MuiButton-endIcon': {
    transition: 'transform 220ms ease',
  },
}));

export const FooterResponseNote = styled('span')({
  color: 'rgb(255 255 255 / 38%)',
  fontSize: '0.7rem',
});

export const FooterGrid = styled('div')(({ theme }) => ({
  // marginTop: theme.spacing(9),
  display: 'flex',
  // gridTemplateColumns: 'minmax(0, 1fr)',
  alignItems: 'start',
  gap: theme.spacing(5),

  [theme.breakpoints.up('sm')]: {
    //gridTemplateColumns: 'minmax(0, 1.2fr) minmax(180px, 0.8fr)',
  },

  [theme.breakpoints.up('lg')]: {
    // marginTop: theme.spacing(13),
    // gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(220px, 0.7fr) minmax(330px, 1fr)',
    gap: theme.spacing(9),
  },
}));

export const FooterIdentity = styled('div')({
  minWidth: 0,
});

export const FooterIdentityHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),

  '& > div > span': {
    display: 'block',
    marginTop: 2,
    color: 'rgb(255 255 255 / 34%)',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '0.6rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
  },
}));

export const FooterLogo = styled('span')({
  width: 58,
  height: 58,
  display: 'grid',
  flexShrink: 0,
  placeItems: 'center',
  borderRadius: 18,

  // background:
  //   'radial-gradient(circle at 32% 22%, rgb(255 255 255 / 16%), transparent 38%), linear-gradient(145deg, rgb(6 72 251 / 28%), rgb(124 58 237 / 10%))',
  // boxShadow: '0 18px 46px rgb(6 72 251 / 20%)',
});

export const FooterBrandName = styled('strong')({
  display: 'block',
  color: '#999',
  fontSize: '1.08rem',
  fontWeight: 900,
  lineHeight: 1.5,
});

export const FooterDescription = styled('p')(({ theme }) => ({
  maxWidth: 470,
  marginBlock: theme.spacing(2.5, 1.5),
  color: 'rgb(255 255 255 / 52%)',
  fontSize: '0.84rem',
  lineHeight: 1.9,
}));

export const FooterLocation = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.65),
  color: 'rgb(255 255 255 / 38%)',
  fontSize: '0.72rem',

  '& svg': {
    color: '#6B8CFF',
    fontSize: 17,
  },
}));

export const FooterNavigation = styled('nav')({
  minWidth: 0,
});

export const FooterColumnLabel = styled('span')({
  display: 'block',
  marginBottom: 18,
  color: '#7C9BFF',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.66rem',
  fontWeight: 800,
  letterSpacing: '0.12em',
});

export const FooterLinks = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 4,
});

export const FooterLinkButton = styled(MuiButton)(({ theme }) => ({
  minWidth: 0,
  minHeight: 34,
  justifyContent: 'flex-start',
  gap: theme.spacing(1),
  padding: 0,
  color: 'rgb(255 255 255 / 64%)',
  fontSize: '0.82rem',
  transition: theme.transitions.create(['color', 'transform']),
  marginLeft: '.5rem',
  marginRight: '.5rem',
  fontWeight: 'normal',

  '& small': {
    color: 'rgb(255 255 255 / 24%)',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '0.58rem',
    letterSpacing: '0.06em',
  },

  '&:hover': {
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    transform: 'translateX(-5px)',
  },
}));

export const FooterContact = styled('div')(({ theme }) => ({
  minWidth: 0,

  [theme.breakpoints.between('sm', 'lg')]: {
    gridColumn: '1 / -1',
  },
}));

export const FooterContactEmail = styled('a')(({ theme }) => ({
  maxWidth: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.9),
  color: '#FFFFFF',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: 'clamp(1.05rem, 2vw, 1.55rem)',
  fontWeight: 800,
  letterSpacing: '-0.03em',
  overflowWrap: 'anywhere',
  transition: theme.transitions.create(['color', 'transform']),

  '& svg': {
    flexShrink: 0,
    color: '#FB923C',
    fontSize: 23,
    transition: 'transform 220ms ease',
  },

  '&:hover': {
    color: '#AFC1FF',
  },

  '&:hover svg': {
    transform: 'translate(-4px, -4px)',
  },
}));

export const FooterContactList = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2.4),
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: theme.spacing(1.3, 2.5),
}));

export const FooterContactLink = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.65),
  color: 'rgb(255 255 255 / 52%)',
  fontSize: '0.76rem',
  fontWeight: 700,
  transition: theme.transitions.create(['color', 'transform']),

  '& svg': {
    color: '#6B8CFF',
    fontSize: 18,
  },

  '&:hover': {
    color: '#FFFFFF',
    transform: 'translateY(-2px)',
  },
}));

export const FooterBottom = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  gridTemplateColumns: 'minmax(0, 1fr) auto',
  alignItems: 'center',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(2.5),
  backgroundImage: 'linear-gradient(90deg, rgb(255 255 255 / 10%), transparent 78%)',
  backgroundPosition: 'top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 1px',

  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(5),
    gridTemplateColumns: '1fr auto 1fr',
  },
}));

export const FooterCopyright = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.8),
  color: 'rgb(255 255 255 / 34%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.62rem',
  letterSpacing: '0.03em',
  direction: 'ltr',

  '& > p': {
    fontSize: '0.62rem',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },

  '& > span': {
    width: 5,
    height: 5,
    borderRadius: '50%',
    backgroundColor: '#32D583',
  },
}));

export const FooterCodeLine = styled('span')(({ theme }) => ({
  display: 'none',
  color: 'rgb(255 255 255 / 23%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.6rem',

  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export const FooterBackButton = styled(MuiButton)(({ theme }) => ({
  minWidth: 0,
  justifySelf: 'end',
  paddingInline: theme.spacing(0.5),
  color: 'rgb(255 255 255 / 48%)',
  fontSize: '0.7rem',
  transition: theme.transitions.create(['color', 'transform']),
  position: 'absolute',
  left: '1rem',
  bottom: '1rem',
  textAlign: 'center',

  [theme.breakpoints.down('sm')]: {
    position: 'static',
    marginTop: theme.spacing(0.125),
  },

  '&:hover': {
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    transform: 'translateY(-3px)',
  },
}));
