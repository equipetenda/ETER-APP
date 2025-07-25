import { Typography, Box, Button } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';

export const SmokeHabitStep7 = () => {
  const { updateField, setStep, formData } = useRegisterForm();

  const handleSelect = (value: string) => {
    updateField('tentativas_parar_fumar', value);
  };

  return (
    <FormRegisterLayout>
      <Box display="flex" flexDirection="column" alignItems="left" width="100%" gap="8px" justifyContent="space-between">
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', fontFamily: 'Poppins' }}>
          Quantas vezes você tentou parar de fumar?
        </Typography>

        {['Nunca, é a primeira vez', 'Entre 1 e 5 vezes', 'Mais de 5 vezes'].map((option) => (
          <Button
            key={option}
            fullWidth
            onClick={() => handleSelect(option)}
            sx={{
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '8px',
              padding: '16px',
              fontFamily: 'Poppins',
              textTransform: 'none',
              boxShadow: 'none',
              justifyContent: 'flex-start',
              border: formData.tentativas_parar_fumar === option ? '2px solid #9747FF' : 'none',
            }}
          >
            {option}
          </Button>
        ))}

        <Box mt="306px" />
        <PrimaryButton onClick={() => setStep(7)} label="Continuar" />
      </Box>
    </FormRegisterLayout>
  );
};
