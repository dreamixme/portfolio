import { CircularProgress } from '@mui/material';

import { LoadingRoot } from '@/components/layout/StatusPage/styled';

export default function Loading() {
  return (
    <LoadingRoot>
      <CircularProgress aria-label="در حال بارگذاری" />
    </LoadingRoot>
  );
}
