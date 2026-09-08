import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import { Box, Button, styled } from '@mui/material';
import { keyframes } from '@mui/material/styles';

const drive = keyframes`
  0% { opacity: 0; transform: translate3d(-1.6rem, 0, 0); }
  12% { opacity: 1; }
  45% { transform: translate3d(-0.15rem, 0, 0); }
  55% { transform: translate3d(0.15rem, 0, 0); }
  88% { opacity: 1; }
  100% { opacity: 0; transform: translate3d(1.6rem, 0, 0); }
`;

const roadFlow = keyframes`
  to { mask-position: -1.5rem center; }
`;

const suspension = keyframes`
  0%, 100% { transform: translateY(0) rotate(0); }
  35% { transform: translateY(-1px) rotate(-2deg); }
  70% { transform: translateY(0.5px) rotate(1deg); }
`;

export const StyledButton = styled(Button)(({ theme }) => ({
  position: 'relative',

  ...theme.applyStyles('light', {
    '&.MuiButton-contained': {
      color: '#FFFFFF',
    },
  }),
}));

export const HiddenButtonContent = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  opacity: 0,
});

export const ButtonLoaderRoot = styled(Box)({
  position: 'absolute',
  inset: 0,
  display: 'grid',
  placeItems: 'center',
  pointerEvents: 'none',
});

export const MiniRoad = styled(Box)({
  position: 'relative',
  width: 58,
  height: 24,

  '&::before': {
    content: '""',
    position: 'absolute',
    right: 0,
    bottom: 4,
    left: 0,
    height: 2,
    borderRadius: 999,
    backgroundColor: 'currentColor',
    opacity: 0.62,
    maskImage:
      'repeating-linear-gradient(90deg, #000 0 9px, transparent 9px 14px, #000 14px 18px, transparent 18px 24px)',
    maskSize: '24px 100%',
    animation: `${roadFlow} 0.7s linear infinite`,
  },

  '@media (prefers-reduced-motion: reduce)': {
    '&::before': { animation: 'none' },
  },
});

export const MiniTruckRunner = styled(Box)({
  position: 'absolute',
  right: 0,
  bottom: 4,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  animation: `${drive} 3.8s cubic-bezier(0.45, 0, 0.55, 1) infinite`,

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
});

export const MiniTruck = styled(LocalShippingRoundedIcon)({
  fontSize: 18,
  filter: 'drop-shadow(0 2px 2px rgb(0 0 0 / 18%))',
  animation: `${suspension} 0.48s ease-in-out infinite`,

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
});
