import { Avatar, Box, Typography, Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import SunIcon from '../../../../assets/sun.png';
import ClockIcon from '../../../../assets/clock.png';
import { useRegisterForm } from '../../../public/user/register/RegisterContext'; // Importar o contexto

export const HeaderUserInfo = () => {
  const { formData } = useRegisterForm(); // Usar o contexto
  const nome = formData.nome || 'Usuário'; // Acessar o nome
  const primeiroNome = nome.charAt(0).toUpperCase(); // Pega a primeira letra

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 0,
        py: 1.5,
        bgcolor: '#fff',
        position: 'fixed',
        top: 0,
        width: '430px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        borderRadius: '20px',
        borderBottom: '1px solid #eee',
      }}
    >

      <Box display="flex" alignItems="center" gap={1.5}>
        {/* Avatar com a primeira letra do nome */}
        <Avatar sx={{ bgcolor: '#6C63FF' }}>
          {primeiroNome}
        </Avatar>
        <Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Typography fontSize="14px" fontWeight={500} color="primary">
              Bom dia
            </Typography>
            <img src={SunIcon} alt="Sol" width={16} height={16} />
          </Box>
          <Typography fontWeight={600} fontSize="16px">
            {nome}
          </Typography>
        </Box>
      </Box>

      <Chip
        avatar={<img src={ClockIcon} alt="Tempo" width={18} height={18} />}
        label="12d 23h 00m"
        sx={{
          bgcolor: '#1F3745',
          color: '#fff',
          fontSize: '12px',
          fontWeight: 500,
          borderRadius: '12px',
          height: '28px',
        }}
      />
    </Box>
  );
};