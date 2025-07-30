import { Typography, Box } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { TextInput } from '../../../../../components/TextInput/TextInput';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';
import { UserService } from '../../../../../services/UserService';
import { RegisterFormData } from '../../../../../types/RegisterFormData';
import { genderConversion } from '../../../../../utilities/gender';

import { useNavigate } from 'react-router-dom';

export const CigaretteQuantStep10 = () => {
  const { formData, updateField, setStep } = useRegisterForm();
  const navigate = useNavigate();

  const submitForm = async () => {
    try {
      const formDataUpdate: RegisterFormData = genderConversion(formData);
      await UserService.create(formDataUpdate);

      navigate('/home'); // Redireciona após sucesso
    } catch (error) {
      alert('Erro ao enviar dados: ' + error);
    }
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
          }}
        />

        <Box mt="306px" />
        <PrimaryButton onClick={submitForm} label="Iniciar Jornada" />
      </Box>
    </FormRegisterLayout>
  );
};
