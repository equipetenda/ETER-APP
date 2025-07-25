import { Typography, Box } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { TextInput } from '../../../../../components/TextInput/TextInput';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';

export const SmokeHabitStep8 = () => {
  const { formData, updateField, setStep } = useRegisterForm();

  return (
    <FormRegisterLayout>
      <Box display="flex" flexDirection="column" alignItems="left" width="100%" gap="8px">
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', fontFamily: 'Poppins' }}>
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
          }}
        />

        <Box mt="306px" />
        <PrimaryButton onClick={() => setStep(8)} label="Continuar" />
      </Box>
    </FormRegisterLayout>
  );
};
