import { Typography, Box } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { TextInput } from '../../../../../components/TextInput/TextInput';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';

export const NameStep3 = () => {
  const { formData, updateField, setStep } = useRegisterForm();

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
          }}
        />

        <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', fontFamily: 'Poppins' }}>
          Qual é o seu e-mail?
        </Typography>
        <TextInput
          label="E-mail"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
          }}
        />

        <Box mt="306px" />
        <PrimaryButton onClick={() => setStep(3)} label="Continuar" />
      </Box>
    </FormRegisterLayout>
  );
};
