import { Typography, Box } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { TextInput } from '../../../../../components/TextInput/TextInput';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';
import { useState } from 'react';
import { ErrorAlert } from '../../../../../components/Alert/Alert';

export const NameStep3 = () => {
  const { formData, updateField, setStep } = useRegisterForm();
  const [errors, setErrors] = useState({ nome: '', email: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { nome: '', email: '' };

    if (!formData.nome.trim()) {
      newErrors.nome = 'O nome é obrigatório.';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'O e-mail é obrigatório.';
      valid = false;
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Digite um e-mail válido.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleContinue = () => {
    if (validate()) {
      setStep(3);
    }
  };

  const errorInputStyle = {
    border: '1px solid #DC2626', // vermelho escuro
    transition: 'border 0.3s ease',
  };

  return (
    <FormRegisterLayout>
      <Box display="flex" flexDirection="column" alignItems="left" width="100%" gap="8px">
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', fontFamily: 'Poppins' }}>
          Qual é o seu nome?
        </Typography>

        <TextInput
          label="Nome"
          value={formData.nome}
          onChange={(e) => updateField('nome', e.target.value)}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            ...(errors.nome ? errorInputStyle : {}),
          }}
        />
        {errors.nome && <ErrorAlert text={errors.nome} />}

        <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', fontFamily: 'Poppins', mt: 2 }}>
          Qual é o seu e-mail?
        </Typography>
        <TextInput
          label="E-mail"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            ...(errors.email ? errorInputStyle : {}),
          }}
        />
        {errors.email && <ErrorAlert text={errors.email} />}

        <Box mt="306px" />
        <PrimaryButton onClick={handleContinue} label="Continuar" />
      </Box>
    </FormRegisterLayout>
  );
}; 