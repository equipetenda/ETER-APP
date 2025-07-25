import { Typography, Box, MenuItem, TextField } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';

export const GenderStep4 = () => {
  const { formData, updateField, setStep } = useRegisterForm();

  return (
    <FormRegisterLayout>
      <Box display="flex" flexDirection="column" alignItems="left" width="100%" gap="8px">
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', fontFamily: 'Poppins' }}>
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
            '& fieldset': { border: 'none' },
          }}
        >
          <MenuItem value="masculino">Masculino</MenuItem>
          <MenuItem value="feminino">Feminino</MenuItem>
          <MenuItem value="outro">Outro</MenuItem>
        </TextField>

        <Box mt="306px" />
        <PrimaryButton onClick={() => setStep(4)} label="Continuar" />
      </Box>
    </FormRegisterLayout>
  );
};
