import { Typography, Box, Button } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';
import { useState } from 'react';
import { ErrorAlert } from '../../../../../components/Alert/Alert';

export const SmokeHabitStep7 = () => {
  const { updateField, setStep, formData } = useRegisterForm();
  const [error, setError] = useState('');

  const handleSelect = (value: string) => {
    updateField('tentativas_parar_fumar', value);
    setError('');
  };

  const handleContinue = () => {
    if (!formData.tentativas_parar_fumar) {
      setError('Por favor, selecione uma opção.');
      return;
    }
    setStep(7); // próxima etapa
  };

  return (
    <FormRegisterLayout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="left"
        width="100%"
        gap="8px"
        justifyContent="space-between"
      >
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', fontFamily: 'Poppins' }}>
          Quantas vezes você tentou parar de fumar?
        </Typography>

        {['Nunca, é a primeira vez', 'Entre 1 e 5 vezes', 'Mais de 5 vezes'].map((option) => (
          <Button
            key={option}
            fullWidth
            onClick={() => handleSelect(option)}
            sx={{
              backgroundColor: '#fff',
              color: '#656FDF',
              borderRadius: '8px',
              padding: '16px',
              fontFamily: 'Poppins',
              textTransform: 'none',
              boxShadow: 'none',
              justifyContent: 'flex-start',
              border: formData.tentativas_parar_fumar === option ? '2px solid #9747FF' : 'none',
            }}
          >
            {option}
          </Button>
        ))}

        {error && <ErrorAlert text={error} />}

        <Box mt="306px" />
        <PrimaryButton onClick={handleContinue} label="Continuar" />
      </Box>
    </FormRegisterLayout>
  );
};
