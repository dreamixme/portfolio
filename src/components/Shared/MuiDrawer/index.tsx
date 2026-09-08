'use client';

import { type PointerEvent, type ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Drawer, type DrawerProps, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import RtlProvider from '@mui/system/RtlProvider';

import MuiIconButton from '@/components/Shared/MuiIconButton';

interface DrawerWrapperProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  noPadding?: boolean;
  showCloseButton?: boolean;
  fullScreen?: boolean;
  anchor?: DrawerProps['anchor'];
}

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'fullScreen' && prop !== 'drawerAnchor',
})<{ fullScreen: boolean; drawerAnchor: NonNullable<DrawerProps['anchor']> }>(({
  fullScreen,
  drawerAnchor,
  theme,
}) => {
  const isSideDrawer = drawerAnchor === 'right' || drawerAnchor === 'left';
  const hasRightEdge = drawerAnchor === 'right';
  const hasLeftEdge = drawerAnchor === 'left';
  const cornerRadius = fullScreen ? 0 : 24;

  return {
    '& .MuiBackdrop-root': {
      backgroundColor: 'rgb(11 16 32 / 38%)',
      backdropFilter: 'blur(4px)',
    },

    '& .MuiDrawer-paper': {
      width: fullScreen ? '100%' : isSideDrawer ? 'min(88vw, 370px)' : 'min(480px, 100%)',
      height: fullScreen || isSideDrawer ? '100dvh' : 'auto',
      maxHeight: fullScreen || isSideDrawer ? '100dvh' : '85dvh',
      margin: isSideDrawer ? 0 : '0 auto',
      borderTopLeftRadius: hasLeftEdge ? 0 : cornerRadius,
      borderTopRightRadius: hasRightEdge ? 0 : cornerRadius,
      borderBottomLeftRadius: isSideDrawer && !hasLeftEdge ? cornerRadius : 0,
      borderBottomRightRadius: isSideDrawer && !hasRightEdge ? cornerRadius : 0,
      borderColor: theme.vars.palette.divider,
      backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.92)`,
      boxShadow: isSideDrawer ? '0 0 64px rgb(16 24 40 / 20%)' : '0 -20px 64px rgb(16 24 40 / 16%)',
      backdropFilter: 'blur(24px) saturate(160%)',
      WebkitBackdropFilter: 'blur(24px) saturate(160%)',
      overflow: 'hidden',
      boxSizing: 'border-box',

      ...theme.applyStyles('dark', {
        backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.9)`,
        boxShadow: isSideDrawer ? '0 0 72px rgb(0 0 0 / 42%)' : '0 -24px 72px rgb(0 0 0 / 38%)',
      }),
    },
  };
});

const DrawerContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',

  height: '100%',
  minHeight: 0,

  overflow: 'hidden',
  backgroundColor: 'transparent',
});

const DrawerHeader = styled(Box)(({ theme }) => ({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  minHeight: 64,
  flexShrink: 0,

  padding: theme.spacing(1, 2),

  borderBottom: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.54)`,

  zIndex: 1,
}));

const DragHandle = styled(Box)(({ theme }) => ({
  position: 'absolute',

  top: 8,
  left: '50%',

  width: 40,
  height: 4,

  transform: 'translateX(-50%)',

  borderRadius: 999,

  backgroundColor: theme.vars.palette.divider,

  cursor: 'grab',

  touchAction: 'none',

  '&:active': {
    cursor: 'grabbing',
  },

  [theme.breakpoints.up(480)]: {
    display: 'none',
  },
}));

const CloseButton = styled(MuiIconButton)(({ theme }) => ({
  position: 'absolute',

  left: theme.spacing(1),
  top: '50%',

  transform: 'translateY(-50%)',

  width: 40,
  height: 40,

  color: theme.vars.palette.text.secondary,
}));

const HeaderTitle = styled(Typography)({
  maxWidth: '70%',
  fontWeight: 600,

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  textAlign: 'center',
});

const DrawerContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'noPadding',
})<{ noPadding: boolean }>(({ noPadding, theme }) => ({
  flex: 1,

  minHeight: 0,

  overflowY: 'auto',
  overflowX: 'hidden',

  WebkitOverflowScrolling: 'touch',

  overscrollBehavior: 'contain',

  padding: theme.spacing(0, noPadding ? 0 : 2, 2),
}));

const DRAG_CLOSE_THRESHOLD = 120;
const DRAG_RESISTANCE = 0.7;
const DRAG_CLOSE_DURATION = 220;

export function MuiDrawer({
  open,
  onClose,
  title,
  children,
  showCloseButton = true,
  noPadding = false,
  fullScreen = false,
  anchor = 'bottom',
}: DrawerWrapperProps) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down(480));
  const isBottomDrawer = anchor === 'bottom';

  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isClosingByDrag, setIsClosingByDrag] = useState(false);

  const startYRef = useRef(0);
  const currentYRef = useRef(0);

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!isBottomDrawer || !isMobile || isClosingByDrag) {
        return;
      }

      event.currentTarget.setPointerCapture(event.pointerId);

      startYRef.current = event.clientY;
      currentYRef.current = event.clientY;

      setIsDragging(true);
    },
    [isBottomDrawer, isMobile, isClosingByDrag],
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!isBottomDrawer || !isDragging || !isMobile || isClosingByDrag) {
        return;
      }

      currentYRef.current = event.clientY;

      const deltaY = event.clientY - startYRef.current;

      if (deltaY <= 0) {
        setDragY(0);
        return;
      }

      setDragY(deltaY * DRAG_RESISTANCE);
    },
    [isBottomDrawer, isDragging, isMobile, isClosingByDrag],
  );

  const handlePointerUp = useCallback(() => {
    if (!isDragging) {
      return;
    }

    const deltaY = currentYRef.current - startYRef.current;

    setIsDragging(false);

    // ============================================
    // CLOSE
    // ============================================

    if (deltaY >= DRAG_CLOSE_THRESHOLD) {
      setIsClosingByDrag(true);

      /*
       * مهم:
       *
       * dragY را صفر نمی‌کنیم.
       *
       * اگر کاربر مثلاً 200px کشیده باشد
       * و مقاومت 0.7 باشد:
       *
       * dragY = 140px
       *
       * animation از همین 140px شروع می‌شود.
       */

      requestAnimationFrame(() => {
        setDragY(window.innerHeight);
      });

      return;
    }

    // ============================================
    // RETURN
    // ============================================

    setDragY(0);
  }, [isDragging]);

  const handlePointerCancel = useCallback(() => {
    setIsDragging(false);
    setDragY(0);
  }, []);

  /*
   * بعد از تمام شدن animation،
   * Drawer را واقعاً می‌بندیم.
   */
  useEffect(() => {
    if (!isClosingByDrag) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsClosingByDrag(false);
      setDragY(0);

      onClose();
    }, DRAG_CLOSE_DURATION);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isClosingByDrag, onClose]);

  return (
    <RtlProvider value={false}>
      <StyledDrawer
        fullScreen={fullScreen}
        drawerAnchor={anchor}
        anchor={anchor}
        open={open}
        onClose={onClose}
        transitionDuration={{ enter: 300, exit: 250 }}
        slotProps={{
          paper: {
            style: {
              /*
               * فقط زمانی transform خود Paper را
               * تغییر می‌دهیم که Drawer باز است
               * و کاربر در حال drag/close با drag است.
               */
              transform:
                isBottomDrawer && (isDragging || isClosingByDrag)
                  ? `translateY(${dragY}px)`
                  : undefined,

              transition:
                isBottomDrawer && isDragging
                  ? 'none'
                  : isBottomDrawer && isClosingByDrag
                    ? `transform ${DRAG_CLOSE_DURATION}ms cubic-bezier(0.2, 0, 0, 1)`
                    : undefined,
            },
          },
        }}
      >
        <DrawerContainer>
          <DrawerHeader>
            {isBottomDrawer && isMobile && !fullScreen && (
              <DragHandle
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
              />
            )}

            {title && <HeaderTitle variant="subtitle1">{title}</HeaderTitle>}

            {showCloseButton && (!isMobile || fullScreen || !isBottomDrawer) && (
              <CloseButton label="بستن" size="small" onClick={onClose}>
                <CloseIcon fontSize="small" />
              </CloseButton>
            )}
          </DrawerHeader>

          <DrawerContent noPadding={noPadding}>{children}</DrawerContent>
        </DrawerContainer>
      </StyledDrawer>
    </RtlProvider>
  );
}
