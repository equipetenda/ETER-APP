import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import bg from '../../assets/bg-form-register.png';

export const FormRegisterLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'rgba(167, 199, 25, 0.9)',
        width: 430,
        height: 932,
        borderRadius: 0,
        boxShadow: 3,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1',
          width: '100%',
          px: '30px',
          py: '120px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
