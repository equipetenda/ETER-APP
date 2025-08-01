import { Typography, Box } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { TextInput } from '../../../../../components/TextInput/TextInput';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';
import { useState } from 'react';
import { ErrorAlert } from '../../../../../components/Alert/Alert';

export const SmokeHabitStep8 = () => {
  const { formData, updateField, setStep } = useRegisterForm();
  const [error, setError] = useState('');

  const validate = () => {
    if (!formData.quant_cigarros_por_dias || formData.quant_cigarros_por_dias <= 0) {
      setError('Informe uma quantidade válida de cigarros.');
      return false;
    }
    setError('');
    return true;
  };

  const handleContinue = () => {
    if (validate()) {
      setStep(8);
    }
  };

  const errorInputStyle = {
    border: '1px solid #DC2626', // vermelho escuro
    transition: 'border 0.3s ease',
  };

  return (
    <FormRegisterLayout>
      <Box display="flex" flexDirection="column" alignItems="left" width="100%" gap="8px">
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: '#fff', fontFamily: 'Poppins' }}
        >
          Quantos cigarros você fumava por dia?
        </Typography>

        <TextInput
          label="Quantidade"
          type="number"
          value={formData.quant_cigarros_por_dias}
          onChange={(e) => updateField('quant_cigarros_por_dias', Number(e.target.value))}
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
