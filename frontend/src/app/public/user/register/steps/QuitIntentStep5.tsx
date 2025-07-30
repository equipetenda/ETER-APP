import { Typography, Box, Button } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';

export const QuitIntentStep5 = () => {
  const { formData, updateField, setStep } = useRegisterForm();
  const userName = formData.nome;
  const selectedOption = formData.quando_deseja_parar_fumar;

  const handleOptionSelect = (option: string) => {
    updateField('quando_deseja_parar_fumar', option);
  };

  return (
    <FormRegisterLayout>
      <Box width="100%" display="flex" flexDirection="column" gap="8px">
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: '#fff', mb: '12px', fontFamily: 'Poppins' }}
        >
          Quando você deseja parar de fumar, {userName}?
        </Typography>

        {['Agora', 'Em breve', 'Eu já parei', 'Não sei'].map((option) => (
          <Button
            key={option}
            fullWidth
            onClick={() => handleOptionSelect(option)}
            sx={{
              backgroundColor: '#fff',
              color: '#656FDF',
              borderRadius: '8px',
              padding: '16px',
              fontWeight: '500',
              fontFamily: 'Poppins',
              textTransform: 'none',
              boxShadow: 'none',
              fontSize: '20px',
              textAlign: 'left',
              justifyContent: 'flex-start',
              border: selectedOption === option ? '2px solid #9747FF' : 'none',
            }}
          >
            {option}
          </Button>
        ))}

        <Box mt="306px" />
        <PrimaryButton onClick={() => setStep(5)} label="Continuar" />
      </Box>
    </FormRegisterLayout>
  );
};
