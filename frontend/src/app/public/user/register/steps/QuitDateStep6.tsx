import { Box, Typography, InputBase, IconButton } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';

export const QuitDateStep6 = () => {
  const { formData, updateField, setStep } = useRegisterForm();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateField('data_parar_fumar', event.target.value);
  };

  const handleContinue = () => {
    if (formData.data_parar_fumar) {
      setStep(6); // próxima etapa
    }
  };

  return (
    <FormRegisterLayout>
      <Box width="100%" display="flex" flexDirection="column" gap="32px">
        <Typography 
          sx={{ 
            fontWeight: 700, 
            fontSize: '24px', 
            color: '#fff', 
            fontFamily: 'Poppins' 
          }}
        >
          Qual é a sua data para parar?
        </Typography>

        <Box 
          sx={{ 
            position: 'relative',
            borderRadius: '8px',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            px: 2,
            height: '56px',
          }}
        >
          <InputBase
            type="date"
            value={formData.data_parar_fumar || ''}
            onChange={handleChange}
            fullWidth
            sx={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              color: '#000',
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              pr: 0,
            }}
          />
        </Box>

        <Box mt="auto" display="flex" justifyContent="center">
          <PrimaryButton 
            onClick={handleContinue}
            label="Continuar"          />
        </Box>
      </Box>
    </FormRegisterLayout>
  );
};
