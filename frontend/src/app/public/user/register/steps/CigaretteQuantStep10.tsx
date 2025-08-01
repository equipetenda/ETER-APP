import { Typography, Box } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { TextInput } from '../../../../../components/TextInput/TextInput';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';
import { UserService } from '../../../../../services/UserService';
import { RegisterFormData } from '../../../../../types/RegisterFormData';
import { genderConversion } from '../../../../../utilities/gender';
import { ErrorAlert } from '../../../../../components/Alert/Alert';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const CigaretteQuantStep10 = () => {
  const { formData, updateField, setStep } = useRegisterForm();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const validate = () => {
    if (!formData.valor_maco || isNaN(Number(formData.valor_maco)) || Number(formData.valor_maco) <= 0) {
      setError('Informe um valor válido.');
      return false;
    }
    setError('');
    return true;
  };

  const submitForm = async () => {
    if (!validate()) return;

    try {
      const formDataUpdate: RegisterFormData = genderConversion(formData);
      await UserService.create(formDataUpdate);
      setStep(10);
      // navigate('/final-step'); // descomente se tiver uma próxima rota
    } catch (error) {
      alert('Erro ao enviar dados: ' + error);
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
          Quanto lhe custava um maço?
        </Typography>

        <TextInput
          label="Valor em R$"
          type="number"
          value={formData.valor_maco}
          onChange={(e) => updateField('valor_maco', e.target.value)}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            ...(error ? errorInputStyle : {}),
          }}
        />
        {error && <ErrorAlert text={error} />}

        <Box mt="306px" />
        <PrimaryButton onClick={submitForm} label="Continuar" />
      </Box>
    </FormRegisterLayout>
  );
};
