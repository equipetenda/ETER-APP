import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import bg from '../../assets/bg-form-register.png';

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{

        backgroundSize: 'cover',
        overflow: 'hidden',

        bgcolor: 'rgba(240, 240, 240, 0.9)', // fundo branco com leve transparência (opcional)
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

        {children}
      </Box>
  );
};
