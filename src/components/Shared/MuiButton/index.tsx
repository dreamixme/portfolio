'use client';

import type { ButtonProps } from '@mui/material';

import {
  ButtonLoaderRoot,
  HiddenButtonContent,
  MiniRoad,
  MiniTruck,
  MiniTruckRunner,
  StyledButton,
} from './styled';

export interface MuiButtonProps extends ButtonProps {
  text?: string;
  loading?: boolean;
}

const MuiButton = (props: MuiButtonProps) => {
  const {
    text = '',
    variant = 'contained',
    size = 'medium',
    type = 'button',
    disabled,
    loading,
    color,
    startIcon,
    endIcon,
    onClick,
    fullWidth = false,
    children,
    ...buttonProps
  } = props;

  return (
    <StyledButton
      {...buttonProps}
      variant={variant}
      onClick={onClick}
      type={type}
      color={color}
      fullWidth={fullWidth}
      startIcon={!loading && startIcon}
      endIcon={!loading && endIcon}
      size={size}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {loading ? (
        <>
          <HiddenButtonContent>{text || children}</HiddenButtonContent>
          <ButtonLoaderRoot aria-hidden="true">
            <MiniRoad>
              <MiniTruckRunner>
                <MiniTruck />
              </MiniTruckRunner>
            </MiniRoad>
          </ButtonLoaderRoot>
        </>
      ) : (
        text || children
      )}
    </StyledButton>
  );
};

export default MuiButton;
