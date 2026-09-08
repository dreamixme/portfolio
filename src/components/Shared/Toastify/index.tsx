'use client';

import type { ReactNode } from 'react';

import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { toast, ToastContainer, type ToastOptions } from 'react-toastify';

interface ToastContentProps {
  message: ReactNode;
  type: 'success' | 'error' | 'info';
}

export const IconWrapper = styled(Box)(() => ({
  verticalAlign: 'middle',
  display: 'inline-block',
  marginRight: '0',
  lineHeight: 0,
  position: 'absolute',
  right: '1rem',

  left: 'auto',
  top: 'calc(50% - .875rem)',
  '& .msgIcon': {
    width: '1.75rem',
    height: '1.75rem',
  },
}));

export const ToastWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.vars.palette.background.paper,
  padding: '1rem',
  width: '100%',
  color: theme.vars.palette.text.secondary,
  paddingRight: '3.5rem',
  paddingLeft: '2.5rem',
  borderRadius: '.5rem',
  boxShadow: 'none !important',

  '& ~ button svg': {
    fill: theme.vars.palette.text.secondary,
  },
}));

export default function ToastContent({ message, type }: ToastContentProps) {
  const Icon =
    type === 'success'
      ? CheckCircleRoundedIcon
      : type === 'info'
        ? InfoRoundedIcon
        : ErrorRoundedIcon;

  return (
    <ToastWrapper>
      <Typography variant="subtitle2" component="p" color="text.primary">
        <IconWrapper>
          <Icon className="msgIcon" aria-hidden="true" />
        </IconWrapper>
        {message}
      </Typography>
    </ToastWrapper>
  );
}

export function MuiToastProvider() {
  return <ToastContainer position="top-center" autoClose={4000} newestOnTop limit={3} rtl />;
}

export const toastify = {
  success: (message: string, options?: ToastOptions) =>
    toast.success(<ToastContent message={message} type="success" />, options),

  error: (message: string, options?: ToastOptions) =>
    toast.error(<ToastContent message={message} type="error" />, options),

  info: (message: string, options?: ToastOptions) =>
    toast.info(<ToastContent message={message} type="info" />, options),
};
