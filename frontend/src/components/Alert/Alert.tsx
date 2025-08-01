import { Box, Typography } from '@mui/material';
import React from 'react';
import ErrorIcon from '../../assets/alert.png'; 

interface ErrorAlertProps {
  text: string;
  color?: string;
  icon?: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({
  text,
  color = '#FEE2E2',
  icon = ErrorIcon
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      sx={{
        backgroundColor: color,
        borderRadius: '8px',
        padding: '8px 12px',
        mt: '4px',
        opacity: 0,
        transform: 'translateY(-8px)',
        animation: 'fadeIn 0.3s ease forwards',
        '@keyframes fadeIn': {
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          }
        }
      }}
    >
      <Box
        sx={{
          borderRadius: '50%',
          width: 24,
          height: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={icon} alt="icon" style={{ width: 14, height: 14 }} />
      </Box>
      <Typography
        fontFamily="Poppins"
        fontWeight={500}
        fontSize="12px"
        color="#B91C1C"
      >
        {text}
      </Typography>
    </Box>
  );
};
