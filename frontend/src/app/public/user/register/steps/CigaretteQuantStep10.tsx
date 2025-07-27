import { Typography, Box } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { TextInput } from '../../../../../components/TextInput/TextInput';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';

import { UserService } from '../../../../../services/UserService';
import { RegisterFormData } from '../../../../../types/RegisterFormData';
import { genderConversion } from '../../../../../utilities/gender';

export const CigaretteQuantStep10 = () => {
  const { formData, updateField, setStep } = useRegisterForm();

  const submitForm = async (step:number)=>{  

    try {      
      let formDataUpdate:RegisterFormData = genderConversion(formData)
      const response = await UserService.create(formDataUpdate)  
      
      setStep(step);    
    } catch (error) {
      alert(error)      
      
    }

  };


  return (
    <FormRegisterLayout>
      <Box display="flex" flexDirection="column" alignItems="left" width="100%" gap="8px">
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', fontFamily: 'Poppins' }}>
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
        <PrimaryButton onClick={() => submitForm(10)} label="Iniciar Jornada" />
      </Box>
    </FormRegisterLayout>
  );
};

