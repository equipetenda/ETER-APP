import { Box, Typography, Button } from '@mui/material';
import friendsRadar from '../../../../assets/friendsRadar.png';

export const SharedJourney = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#7065F0',
        borderRadius: '20px',
        padding: '24px 20px',
        textAlign: 'center',
        color: 'white',
        mx: 2,
        mt: 4,
      }}
    >
      <Typography variant="caption" sx={{ opacity: 0.7 }}>
        Jornadas compartilhadas
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
        Chame seus amigos <br />
        para compartilhar seus ciclos
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: 'white',
          color: '#7065F0',
          borderRadius: '12px',
          mt: 3,
          px: 2.5,
          py: 1,
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: '14px',
          boxShadow: 'none',
        }}
      >
        Procure amigos
      </Button>
    </Box>
  );
};
