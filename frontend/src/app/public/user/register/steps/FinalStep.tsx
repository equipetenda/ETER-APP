import { Typography, Box } from '@mui/material';
import { PrimaryButton } from '../../../../../components/Button/Button';
import { useRegisterForm } from '../RegisterContext';
import { FormRegisterLayout } from '../../../../../components/FormRegisterLayout/FormRegisterLayout';
import JourneyGif from '../../../../../assets/winking-face.gif'; 
import { useNavigate } from 'react-router-dom';


export const FinalStep = () => {
  const { setStep } = useRegisterForm();
  const navigate = useNavigate();


  return (
    <FormRegisterLayout>
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="left" width="100%">
        <Typography 
          sx={{ 
            fontWeight: 700, 
            fontSize: '32px', 
            color: '#fff', 
            fontFamily: 'Poppins' 
          }}
        >
          Vamos iniciar!
        </Typography>

        <Typography 
          sx={{ 
            fontSize: '20px', 
            mt: '16px', 
            color: '#fff', 
            fontFamily: 'Poppins' 
          }}
        >
          Monitorar seu progresso é essencial para perceber que você está alcançando objetivos!
        </Typography>

        <Box mt="40px" mb="40px">
          <img 
            src={JourneyGif} 
            alt="Animação de jornada" 
            width="240px" 
            height="240px" 
          />
        </Box>

        <PrimaryButton 
          onClick={() => {
            localStorage.setItem('registerFormData', JSON.stringify(FormData));
            navigate('/home');
          }} 
          label="Iniciar Jornada!"
        />

      </Box>
    </FormRegisterLayout>
  );
};
