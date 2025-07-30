// Step1.tsx
import { Box, Button, Typography, TextField } from '@mui/material';
import { FormStepLayout } from './FormStepLayout';

export const Step1 = ({ value, onChange, onNext, onBack }: any) => (
  <FormStepLayout step={0} onBack={onBack}>
    <Box>
      <Typography
        variant="h5"
        fontWeight="bold"
        color="#6C63FF"
        mb={1}
      >
        Por que?
      </Typography>

      <Typography mb={2}>
        Use esse espaço de diário e descreva aqui o que aconteceu hoje que fez você se sentir assim:
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            '& fieldset': {
              borderColor: '#6C63FF', // Altera a cor da borda
            },
            '&:hover fieldset': {
              borderColor: '#6C63FF', // Altera a cor da borda no hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6C63FF', // Altera a cor da borda quando focado
            },
          },
        }}
      />
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
        onClick={onNext}
      >
        Continuar
      </Button>
      <Typography align="center" mt={1} fontSize={12}>
        Prefiro não responder hoje
      </Typography>
    </Box>
  </FormStepLayout>
);