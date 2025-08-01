import { Box, Typography, InputBase } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';
import { useState } from 'react';
import { ErrorAlert } from '../../../../../components/Alert/Alert';

export const QuitDateStep6 = () => {
  const { formData, updateField, setStep } = useRegisterForm();
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateField('data_parar_fumar', event.target.value);
    if (event.target.value) setError('');
  };

  const handleContinue = () => {
    if (!formData.data_parar_fumar) {
      setError('Por favor, selecione uma data.');
      return;
    }
    setStep(6); // próxima etapa
  };

  const errorInputStyle = {
    border: '1px solid #DC2626', // vermelho escuro
    transition: 'border 0.3s ease',
  };

  return (
    <FormRegisterLayout>
      <Box width="100%" display="flex" flexDirection="column" gap="8px">
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '24px',
            color: '#fff',
            fontFamily: 'Poppins',
            mb: '8px'
          }}
        >
          Qual é a sua data para parar?
        </Typography>

        <Box
          sx={{
            position: 'relative',
            borderRadius: '8px',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            px: 2,
            height: '56px',
            ...(error ? errorInputStyle : {}),
          }}
        >
          <InputBase
            type="date"
            value={formData.data_parar_fumar || ''}
            onChange={handleChange}
            fullWidth
            sx={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              color: '#000',
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              pr: 0,
            }}
          />
        </Box>

        {error && <ErrorAlert text={error} />}

        <Box mt="auto" display="flex" justifyContent="center">
          <PrimaryButton onClick={handleContinue} label="Continuar" />
        </Box>
      </Box>
    </FormRegisterLayout>
  );
};
