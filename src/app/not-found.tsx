import { Typography } from '@mui/material';

import MuiButton from '@/components/Shared/MuiButton';
import { StatusContainer, StatusContent, StatusTitle } from '@/components/layout/StatusPage/styled';

export default function NotFound() {
  return (
    <StatusContainer maxWidth="sm">
      <StatusContent>
        <StatusTitle>404</StatusTitle>
        <Typography variant="h5">صفحه پیدا نشد</Typography>
        <Typography color="text.secondary">
          صفحه‌ای که می‌خواهید وجود ندارد یا منتقل شده است.
        </Typography>
        <MuiButton href="/" text="بازگشت به خانه" />
      </StatusContent>
    </StatusContainer>
  );
}
