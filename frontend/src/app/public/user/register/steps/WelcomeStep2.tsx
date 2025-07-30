import { Typography, Box } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';
import IconIntroStep2 from '../../../../../assets/iconIntroStep2.png';

export const WelcomeStep2 = () => {
  const { setStep } = useRegisterForm();

  return (
    <FormRegisterLayout>
      <Box display="flex" flexDirection="column" alignItems="left" gap="12px">
        <img src={IconIntroStep2} alt="Ilustração" width={120} />
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '32px', color: '#fff', fontFamily: 'Poppins' }}>
        Sabemos que parar de fumar pode ser desafiador.
        </Typography>
        <Typography sx={{ color: '#fff', textAlign: 'left', fontFamily: 'Poppins' }}>
        Mas com o Breathly essa jornada pode ser mais leve, a chave do sucesso é a motivação constante.        
        </Typography>
        <Typography sx={{ color: '#fff', textAlign:  'left',  fontFamily: 'Poppins' }}>
          Vamos juntos?
        </Typography>
        <Box mt="306px" />
        <PrimaryButton onClick={() => setStep(2)} label="Continuar" />
      </Box>
    </FormRegisterLayout>
  );
};
