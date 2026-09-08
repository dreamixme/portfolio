'use client';

import IconButton, { type IconButtonProps } from '@mui/material/IconButton';

export interface MuiIconButtonProps extends IconButtonProps {
  label: string;
}

export default function MuiIconButton({ label, title, ...props }: MuiIconButtonProps) {
  return <IconButton {...props} aria-label={label} title={title ?? label} />;
}
