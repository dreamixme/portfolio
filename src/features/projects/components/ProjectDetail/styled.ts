'use client';

import Image from 'next/image';

import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SpotlightBorder } from '@/components/common/SpotlightBorder';
import AppLink from '@/components/common/AppLink';
import MuiButton from '@/components/Shared/MuiButton';

export const DetailRoot = styled('main')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  flex: 1,
  overflow: 'hidden',
  paddingTop: theme.spacing(14),
  paddingBottom: theme.spacing(10),
  background: `linear-gradient(180deg, rgba(${theme.vars.palette.primary.mainChannel} / 0.055), transparent 24%)`,

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'linear-gradient(rgb(6 72 251 / 2.5%) 1px, transparent 1px), linear-gradient(90deg, rgb(6 72 251 / 2.5%) 1px, transparent 1px)',
    backgroundSize: '58px 58px',
    maskImage: 'linear-gradient(to bottom, black, transparent 42%)',
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(14),
  },
}));

export const DetailContainer = styled(Container)({
  position: 'relative',
});

export const BackLink = styled(AppLink)(({ theme }) => ({
  width: 'fit-content',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.7),
  color: theme.vars.palette.text.secondary,
  fontSize: '0.78rem',
  fontWeight: 800,
  transition: theme.transitions.create(['color', 'transform']),

  '& svg': {
    fontSize: 18,
  },

  '&:hover': {
    color: theme.vars.palette.primary.main,
    transform: 'translateX(4px)',
  },
}));

export const DetailHero = styled('header')(({ theme }) => ({
  marginBlock: theme.spacing(5, 6),
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(4),

  [theme.breakpoints.up('md')]: {
    marginBlock: theme.spacing(7, 8),
    gridTemplateColumns: 'minmax(0, 1.18fr) minmax(380px, 0.82fr)',
    alignItems: 'end',
    gap: theme.spacing(8),
  },
}));

export const HeroCopy = styled('div')({
  minWidth: 0,
});

export const DetailEyebrow = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  padding: theme.spacing(0.75, 1.2),
  border: `1px solid rgba(${theme.vars.palette.primary.mainChannel} / 0.2)`,
  borderRadius: 999,
  color: theme.vars.palette.primary.main,
  backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.07)`,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.68rem',
  fontWeight: 800,
  letterSpacing: '0.08em',
}));

export const DetailTitle = styled('h1')(({ theme }) => ({
  marginBlock: theme.spacing(2, 1.5),
  fontSize: 'clamp(3rem, 8vw, 6.8rem)',
  fontWeight: 900,
  lineHeight: 1.08,
  letterSpacing: '-0.055em',
}));

export const DetailIntro = styled('p')(({ theme }) => ({
  maxWidth: 760,
  margin: 0,
  color: theme.vars.palette.text.secondary,
  fontSize: '1rem',
  lineHeight: 1.95,

  [theme.breakpoints.up('md')]: {
    fontSize: '1.08rem',
  },
}));

export const HeroActions = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: theme.spacing(2),

  '& > span': {
    color: theme.vars.palette.text.secondary,
    fontSize: '0.76rem',
    fontWeight: 800,
  },
}));

export const LiveProjectButton = styled(MuiButton)({});

export const MetaGrid = styled('dl')(({ theme }) => ({
  margin: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  overflow: 'hidden',
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 24,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.76)`,
  boxShadow: '0 24px 62px rgb(16 24 40 / 8%)',
  backdropFilter: 'blur(20px)',
}));

export const MetaItem = styled('div')(({ theme }) => ({
  minWidth: 0,
  minHeight: 132,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: theme.spacing(2.2),
  borderInlineEnd: `1px solid ${theme.vars.palette.divider}`,
  borderBottom: `1px solid ${theme.vars.palette.divider}`,

  '&:nth-of-type(2n)': {
    borderInlineEnd: 0,
  },

  '&:nth-last-of-type(-n + 2)': {
    borderBottom: 0,
  },

  '& svg': {
    marginBottom: theme.spacing(1),
    color: theme.vars.palette.primary.main,
    fontSize: 21,
  },

  '& span': {
    color: theme.vars.palette.text.disabled,
    fontSize: '0.67rem',
  },

  '& strong': {
    maxWidth: '100%',
    marginTop: 3,
    overflow: 'hidden',
    color: theme.vars.palette.text.primary,
    fontSize: '0.82rem',
    fontWeight: 900,
    lineHeight: 1.65,
    textOverflow: 'ellipsis',
  },

  [theme.breakpoints.down('sm')]: {
    minHeight: 116,
    padding: theme.spacing(1.7),
  },
}));

export const VisualFrame = styled('div')(({ theme }) => ({
  padding: theme.spacing(0.8),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 36,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.65)`,
  boxShadow: '0 36px 100px rgb(16 24 40 / 10%)',

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.55),
    borderRadius: 25,
  },
}));

export const DetailContent = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(5),

  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(12),
    gridTemplateColumns: '300px minmax(0, 1fr)',
    alignItems: 'start',
    gap: theme.spacing(9),
  },
}));

export const DetailAside = styled('aside')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    position: 'sticky',
    top: 112,
  },
}));

export const SidePanel = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 22,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.7)`,
}));

export const SidePanelSection = styled('div')(({ theme }) => ({
  padding: theme.spacing(2.5),

  '& + &': {
    borderTop: `1px solid ${theme.vars.palette.divider}`,
  },
}));

export const SectionKicker = styled('span')(({ theme }) => ({
  display: 'block',
  color: theme.vars.palette.primary.main,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.67rem',
  fontWeight: 800,
  letterSpacing: '0.1em',
}));

export const TagList = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.75),
}));

export const TagListItem = styled('span')(({ theme }) => ({
  padding: theme.spacing(0.65, 1),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 9,
  color: theme.vars.palette.text.secondary,
  backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel} / 0.7)`,
  fontSize: '0.68rem',
  fontWeight: 700,
}));

export const Overview = styled('article')({
  minWidth: 0,
});

export const OverviewHeading = styled('h2')(({ theme }) => ({
  maxWidth: 760,
  marginBlock: theme.spacing(1.5, 2.5),
  fontSize: '2.05rem',
  fontWeight: 900,
  lineHeight: 1.5,
  letterSpacing: '-0.025em',

  [theme.breakpoints.up('md')]: {
    fontSize: '2.8rem',
  },
}));

export const OverviewParagraph = styled('p')(({ theme }) => ({
  maxWidth: 820,
  marginBlock: theme.spacing(0, 2),
  color: theme.vars.palette.text.secondary,
  fontSize: '1rem',
  lineHeight: 2.05,
}));

export const DraftNotice = styled('div')(({ theme }) => ({
  maxWidth: 820,
  marginTop: theme.spacing(3),
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2.25),
  border: `1px dashed rgba(${theme.vars.palette.secondary.mainChannel} / 0.42)`,
  borderRadius: 18,
  color: theme.vars.palette.text.secondary,
  backgroundColor: `rgba(${theme.vars.palette.secondary.mainChannel} / 0.06)`,

  '& > svg': {
    flexShrink: 0,
    color: theme.vars.palette.secondary.main,
  },

  '& strong, & span': {
    display: 'block',
  },

  '& strong': {
    color: theme.vars.palette.text.primary,
    fontSize: '0.82rem',
  },

  '& span': {
    marginTop: 4,
    fontSize: '0.76rem',
    lineHeight: 1.8,
  },
}));

export const CaseGrid = styled('section')(({ theme }) => ({
  marginTop: theme.spacing(9),
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(2),

  '& > div': {
    height: '100%',
  },

  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(13),
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
}));

export const CaseCard = styled(SpotlightBorder)(({ theme }) => ({
  height: '100%',
  minHeight: 310,
  overflow: 'hidden',
  padding: theme.spacing(3),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 24,
  background: `linear-gradient(145deg, rgba(${theme.vars.palette.background.paperChannel} / 0.86), rgba(${theme.vars.palette.background.defaultChannel} / 0.68))`,
  boxShadow: '0 22px 60px rgb(16 24 40 / 7%)',
}));

export const CaseCardIcon = styled('span')(({ theme }) => ({
  width: 46,
  height: 46,
  display: 'grid',
  placeItems: 'center',
  border: `1px solid rgba(${theme.vars.palette.primary.mainChannel} / 0.2)`,
  borderRadius: 14,
  color: theme.vars.palette.primary.main,
  backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.08)`,
}));

export const CaseCardKicker = styled('span')(({ theme }) => ({
  display: 'block',
  marginTop: theme.spacing(4),
  color: theme.vars.palette.text.disabled,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.62rem',
  fontWeight: 800,
  letterSpacing: '0.09em',
}));

export const CaseCardTitle = styled('h3')(({ theme }) => ({
  marginBlock: theme.spacing(0.75, 1),
  fontSize: '1.3rem',
  fontWeight: 900,
}));

export const CaseCardText = styled('p')(({ theme }) => ({
  margin: 0,
  color: theme.vars.palette.text.secondary,
  fontSize: '0.84rem',
  lineHeight: 1.9,
}));

export const GalleryGrid = styled('section')(({ theme }) => ({
  marginTop: theme.spacing(9),
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
}));

export const GalleryItem = styled('figure')(({ theme }) => ({
  position: 'relative',
  aspectRatio: '16 / 10',
  overflow: 'hidden',
  margin: 0,
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 24,
  backgroundColor: theme.vars.palette.background.paper,
}));

export const GalleryImage = styled(Image)({
  objectFit: 'cover',
});

export const GalleryCaption = styled('figcaption')(({ theme }) => ({
  position: 'absolute',
  insetInline: theme.spacing(2),
  bottom: theme.spacing(2),
  width: 'fit-content',
  maxWidth: 'calc(100% - 32px)',
  padding: theme.spacing(0.8, 1.2),
  border: '1px solid rgb(255 255 255 / 14%)',
  borderRadius: 10,
  color: '#FFFFFF',
  backgroundColor: 'rgb(5 12 28 / 70%)',
  fontSize: '0.72rem',
  backdropFilter: 'blur(14px)',
}));

export const NextProjectCard = styled('section')(({ theme }) => ({
  marginTop: theme.spacing(9),
  overflow: 'hidden',
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 28,
  background:
    'radial-gradient(circle at 18% 20%, rgb(249 115 22 / 18%), transparent 32%), linear-gradient(125deg, #061A55, #063DBD 52%, #2A125B)',
  boxShadow: '0 28px 76px rgb(6 72 251 / 18%)',

  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(13),
  },
}));

export const NextProjectLink = styled(AppLink)(({ theme }) => ({
  minHeight: 210,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
  padding: theme.spacing(4),
  color: '#FFFFFF',

  '& > svg': {
    fontSize: 46,
    transition: 'transform 260ms ease',
  },

  '&:hover > svg': {
    transform: 'translate(-7px, -7px)',
  },

  [theme.breakpoints.up('md')]: {
    minHeight: 260,
    padding: theme.spacing(6),
  },
}));

export const NextProjectKicker = styled('span')({
  color: 'rgb(255 255 255 / 58%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.67rem',
  fontWeight: 800,
  letterSpacing: '0.1em',
});

export const NextProjectTitle = styled('h2')(({ theme }) => ({
  marginBlock: theme.spacing(1, 0),
  color: '#FFFFFF',
  fontSize: 'clamp(2rem, 6vw, 4rem)',
  fontWeight: 900,
  lineHeight: 1.2,
}));
