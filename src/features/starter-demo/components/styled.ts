import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
  },
}));
