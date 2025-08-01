import { Typography, Box, MenuItem, TextField } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';
import { useState } from 'react';
import { ErrorAlert } from '../../../../../components/Alert/Alert';

export const GenderStep4 = () => {
  const { formData, updateField, setStep } = useRegisterForm();
  const [error, setError] = useState('');

  const validate = () => {
    if (!formData.genero_id.trim()) {
      setError('Selecione uma opção de gênero.');
      return false;
    }
    setError('');
    return true;
  };

  const handleContinue = () => {
    if (validate()) {
      setStep(4);
    }
  };

  const errorInputStyle = {
    border: '1px solid #DC2626',
    transition: 'border 0.3s ease',
  };

  return (
    <FormRegisterLayout>
      <Box display="flex" flexDirection="column" alignItems="left" width="100%" gap="8px">
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: '#fff', fontFamily: 'Poppins' }}
        >
          Como você se identifica?
        </Typography>

        <TextField
          select
          fullWidth
          value={formData.genero_id}
          onChange={(e) => updateField('genero_id', e.target.value)}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              ...(error ? errorInputStyle : {}),
            },
            '& fieldset': {
              border: 'none',
            },
          }}
        >
          <MenuItem value="">Selecione</MenuItem>
          <MenuItem value="masculino">Masculino</MenuItem>
          <MenuItem value="feminino">Feminino</MenuItem>
          <MenuItem value="outro">Outro</MenuItem>
        </TextField>

        {error && <ErrorAlert text={error} />}

        <Box mt="306px" />
        <PrimaryButton onClick={handleContinue} label="Continuar" />
      </Box>
    </FormRegisterLayout>
  );
};
