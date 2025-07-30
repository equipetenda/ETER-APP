import { Box, Typography } from '@mui/material';
import { useRegisterForm } from '../../../public/user/register/RegisterContext';
import EmojiFeliz from '../../../../assets/mood/slightly-smiling-face.gif';
import EmojiAnimado from '../../../../assets/mood/grimacing-face.gif';

const diasDaSemana = ['seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.', 'dom.'];

// Ajustado para permitir indexação com number
const emojis: { [key: number]: string } = {
  0: EmojiFeliz,   // segunda
  1: EmojiAnimado, // terça
  // os demais dias ainda não possuem emoji
};

export const DailyRegister = () => {
  const { formData } = useRegisterForm();
  const dataInicio = new Date(formData.data_inicio_fumar || '2025-02-24');
  const dataParar = new Date(formData.data_parar_fumar || '2025-03-02');

  const periodo = `${dataInicio.toLocaleDateString()} – ${dataParar.toLocaleDateString()}`;

  return (
    <Box px={2} mb={3}>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography fontWeight={600}>Registro diário</Typography>
        <Typography fontSize="12px" color="gray">
          {periodo}
        </Typography>
      </Box>

      <Box
        sx={{
          border: '2px solid #7E7EFF',
          borderRadius: '16px',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {diasDaSemana.map((dia, index) => (
          <Box
            key={dia}
            textAlign="center"
            width="36px"
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: emojis[index] ? '2px solid #7E7EFF' : '2px dotted #7E7EFF',
                backgroundColor: emojis[index] ? '#7E7EFF' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 0.5,
              }}
            >
              {emojis[index] ? (
                <img src={emojis[index]} alt="emoji" width={24} height={24} />
              ) : (
                <Typography fontSize={18} color="gray">
                  ?
                </Typography>
              )}
            </Box>
            <Typography fontSize="12px">{dia}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
