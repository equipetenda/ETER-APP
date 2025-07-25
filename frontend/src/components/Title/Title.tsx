import { Typography } from '@mui/material';

interface Props {
  children: string;
}

export const Title = ({ children }: Props) => (
  <Typography
    variant="h5"
    fontWeight="bold"
    sx={{ fontFamily: 'Poppins', color: '#fff', marginBottom: 2 }}
  >
    {children}
  </Typography>
);
