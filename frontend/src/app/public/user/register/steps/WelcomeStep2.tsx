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
          Bem vindo ao Éter!
        </Typography>
        <Typography sx={{ color: '#fff', textAlign: 'left', fontFamily: 'Poppins' }}>
          Parar de fumar é um grande desafio, mas você não está só. Cada pequeno passo conta e estamos prontos para ajudar você nessa jornada.
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
