import { Typography, Box } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { TextInput } from '../../../../../components/TextInput/TextInput';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';
import { useState } from 'react';
import { ErrorAlert } from '../../../../../components/Alert/Alert';

export const SmokeHabitStep9 = () => {
  const { formData, updateField, setStep } = useRegisterForm();
  const [error, setError] = useState('');

  const validate = () => {
    if (!formData.quant_cigarros_por_maco || formData.quant_cigarros_por_maco <= 0) {
      setError('Informe um valor válido.');
      return false;
    }
    setError('');
    return true;
  };

  const handleContinue = () => {
    if (validate()) {
      setStep(9); // Avança para o próximo passo
    }
  };

  const errorInputStyle = {
    border: '1px solid #DC2626',
    transition: 'border 0.3s ease',
  };

  return (
    <FormRegisterLayout>
      <Box display="flex" flexDirection="column" alignItems="left" width="100%" gap="8px">
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', fontFamily: 'Poppins' }}>
          Quantos cigarros continham um maço?
        </Typography>

        <TextInput
          label="Quantidade"
          type="number"
          value={formData.quant_cigarros_por_maco}
          onChange={(e) => updateField('quant_cigarros_por_maco', Number(e.target.value))}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            ...(error ? errorInputStyle : {}),
          }}
        />
        {error && <ErrorAlert text={error} />}

        <Box mt="306px" />
        <PrimaryButton onClick={handleContinue} label="Continuar" />
      </Box>
    </FormRegisterLayout>
  );
};
