'use client';

import { Typography } from '@mui/material';
import { useEffect } from 'react';

import MuiButton from '@/components/Shared/MuiButton';
import { StatusContainer, StatusContent, StatusTitle } from '@/components/layout/StatusPage/styled';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusContainer maxWidth="sm">
      <StatusContent>
        <StatusTitle>مشکلی پیش آمد</StatusTitle>
        <Typography color="text.secondary">
          هنگام نمایش این بخش خطایی رخ داد. می‌توانید بدون بارگذاری دوباره‌ی کل سایت تلاش کنید.
        </Typography>
        <MuiButton onClick={reset} text="تلاش دوباره" />
      </StatusContent>
    </StatusContainer>
  );
}
