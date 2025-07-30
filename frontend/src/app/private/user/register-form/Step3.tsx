// Step3.tsx
import { Box, Button, Typography } from '@mui/material';
import { FormStepLayout } from './FormStepLayout';
import HappyEmoji from '../../../../assets/mood/grinning-face-with-big-eyes.gif';

export const Step3 = ({ value, onChange, onFinish, onBack }: any) => (
  <FormStepLayout step={2} onBack={onBack}>
    <Box textAlign="center">
      <Typography variant="h5" fontWeight="bold" color="#6C63FF" mb={1}>
        E a sua confiança?
      </Typography>
      <Typography mb={5}>Quão confiante você se sente para seguir sua jornada hoje?</Typography>

      <img src={HappyEmoji} alt="Emoji" width={160} height={160} style={{ marginBottom: 32 }} />
      <Typography mb={2}>Confiante</Typography>

      <Box display="flex" justifyContent="center" gap={2} mb={3}>
        {[1, 2, 3, 4, 5].map((num) => (
          <Box
            key={num}
            onClick={() => onChange(num)}
            sx={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              backgroundColor: value === num ? '#6C63FF' : '#ccc',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {num}
          </Box>
        ))}
      </Box>
    </Box>

    <Box>
      <Button
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: '#233D4D',
          borderRadius: '12px',
          py: 1.5,
          fontWeight: 'bold',
        }}
        onClick={onFinish}
      >
        Salvar Registro
      </Button>
      <Typography align="center" mt={1} fontSize={12}>
        Prefiro não responder hoje
      </Typography>
    </Box>
  </FormStepLayout>
);