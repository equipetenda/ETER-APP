import { Typography, Box } from '@mui/material';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { useRegisterForm } from '../RegisterContext';
import IconIntroStep1 from '../../../../../assets/iconIntroStep1.png';

export const WelcomeStep1 = () => {
  const { setStep } = useRegisterForm();

  return (
    <FormRegisterLayout>
        <Box display="flex" flexDirection="column">
        {/* Conteúdo superior */}
        <Box
          sx={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            gap: '12px',
          }}
        >
          <img src={IconIntroStep1} alt="Ilustração" width={120} />
          <Typography
            variant="h6"
            sx={{
              color: '#fff',
              fontWeight: 600,
              fontFamily: 'Poppins',
              fontSize: '32px',
              marginTop: '12px',
            }}
          >
            Parabéns por dar esse passo!
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              fontSize: '20px',
              fontFamily: 'Poppins',
            }}
          >
            Parar de fumar é uma das melhores decisões para saúde e bem-estar!
          </Typography>
        </Box>

        {/* Espaço flexível que empurra o botão para baixo */}
        <Box flexGrow={1} />

        {/* Botão + texto inferior */}
        <Box sx={{ textAlign: 'center' }}>
          <PrimaryButton onClick={() => setStep(1)} label="Cadastrar-se" />
          <Typography
            sx={{
              marginTop: 2,
              fontSize: 14,
              color: '#fff',
              fontFamily: 'Poppins',
            }}
          >
            Já tem uma conta? Faça login
          </Typography>
        </Box>
      </Box>
    </FormRegisterLayout>
  );
};
