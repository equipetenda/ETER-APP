import { Box, Typography, IconButton, Chip, Fade } from '@mui/material';
import { useState, useEffect } from 'react'; // 1. Importe o useEffect
import { useNavigate } from 'react-router-dom';

import AddIcon from '../../../../assets/add.png';
import ArrowIcon from '../../../../assets/arrow-right.png';
import BackArrowIcon from '../../../../assets/arrow_back_white.png';

import HappyIcon from '../../../../assets/mood/slightly-smiling-face.gif';
import ExcitedIcon from '../../../../assets/mood/grinning-face-with-big-eyes.gif';
import NervousIcon from '../../../../assets/mood/grimacing-face.gif';
import AnxiousIcon from '../../../../assets/mood/confounded-face.gif';
import SadIcon from '../../../../assets/mood/worried-face.gif';
import BoredIcon from '../../../../assets/mood/expressionless-face.gif';
import AngryIcon from '../../../../assets/mood/angry-face.gif';
import SickIcon from '../../../../assets/mood/nauseated-face.gif';
import { useDiaryHome } from '../../../public/user/diary-home/DiaryHomeContext';
import { MoodKey } from '../../../../types/MoodKey';

const moodList: { key: MoodKey; label: string; icon: string }[] = [
  { key: 'feliz', label: 'Feliz', icon: HappyIcon },
  { key: 'animado', label: 'Animado', icon: ExcitedIcon },
  { key: 'nervoso', label: 'Nervoso', icon: NervousIcon },
  { key: 'ansioso', label: 'Ansioso', icon: AnxiousIcon },
  { key: 'deprimido', label: 'Deprimido', icon: SadIcon },
  { key: 'entediado', label: 'Entediado', icon: BoredIcon },
  { key: 'zangado', label: 'Zangado', icon: AngryIcon },
  { key: 'enjoado', label: 'Enjoado', icon: SickIcon },
];

const moodOptions: Record<MoodKey, string[]> = {
  feliz: ['Satisfação', 'Gratidão', 'Paz', 'Bem-estar', 'Entusiasmo', 'Realização'],
  animado: ['Energia', 'Motivação', 'Otimismo', 'Esperança', 'Alegria', 'Euforia'],
  nervoso: ['Insegurança', 'Estresse', 'Tensão', 'Frustração', 'Desconforto', 'Impaciência'],
  ansioso: ['Preocupação', 'Tensão', 'Inquietação', 'Alerta', 'Incerteza', 'Medo'],
  deprimido: ['Tristeza', 'Vazio', 'Culpa', 'Desamparo', 'Desânimo', 'Solidão'],
  entediado: ['Cansaço', 'Falta de estímulo', 'Desinteresse', 'Letargia', 'Monotonia', 'Desânimo'],
  zangado: ['Irritação', 'Raiva', 'Frustração', 'Resentimento', 'Fúria', 'Impaciência'],
  enjoado: ['Desconforto', 'Náusea', 'Mal-estar', 'Fadiga', 'Sensibilidade', 'Exaustão'],
};

export const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState<MoodKey | null>(null);
  const [selectedDetails, setSelectedDetails] = useState<string[]>([]);
  const navigate = useNavigate();

  const { formDataDiaryHome } = useDiaryHome();
  
  // 2. Use useEffect para sincronizar a atualização do contexto com a mudança do estado
  useEffect(() => {
    // Este código agora executa *depois* que 'selectedDetails' foi atualizado.
    formDataDiaryHome.emocoes = selectedDetails;
  }, [selectedDetails, formDataDiaryHome]); // O array de dependências garante que isso só rode quando necessário.


  const handleDetailToggle = (emotion: string) => {
    // A única responsabilidade desta função agora é atualizar o estado.
    setSelectedDetails((prev) =>
      prev.includes(emotion) 
        ? prev.filter((e) => e !== emotion)
        : prev.length < 3 ? [...prev, emotion] : prev
    );
    
  };

  return (
    <Box px={2} sx={{ position: 'relative', minHeight: '200px' }}>
      {/* Box das emoções principais */}
      <Box
        sx={{
          backgroundColor: '#6C63FF',
          borderRadius: '16px',
          p: 2,
          color: 'white',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <img src={AddIcon} alt="Add" width={20} height={20} />
          <Typography variant="h6" fontWeight={600}>
            Como está se sentindo hoje?
          </Typography>
        </Box>

        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="space-between">
          {moodList.map(({ key, label, icon }) => (
            <Box
              key={key}
              textAlign="center"
              onClick={() => {
                setSelectedMood(key);
                setSelectedDetails([]);
                
                // 3. Corrigido: Evita mutação direta e garante que apenas o humor atual seja definido.
                formDataDiaryHome.sentimentos = [key];
              }}
              sx={{
                cursor: 'pointer',
                width: 60,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img src={icon} alt={label} width={48} height={48} />
              <Typography fontSize="0.875rem" mt={0.5}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Box flutuante com transição */}
      <Fade in={!!selectedMood}>
        <Box
          sx={{
            backgroundColor: '#6C63FF',
            borderRadius: '16px',
            p: 2,
            color: 'white',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <IconButton 
              onClick={() => {
                setSelectedMood(null)}
              } 
              sx={{ color: 'white', mr: 1 }}>
              <img src={BackArrowIcon} alt="Voltar" width={24} height={24} />
            </IconButton>
            <img src={AddIcon} alt="Add" width={20} height={20} />
            <Typography fontWeight={600}>Mais precisamente...</Typography>
          </Box>

          <Typography fontSize="0.875rem" mb={2}>
            Selecione até 3 emoções que aprofundam como você está se sentindo hoje.
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={1.5} mb={3}>
            {selectedMood &&
              moodOptions[selectedMood].map((option) => (
                <Chip
                  key={option}
                  label={option}
                  onClick={() => handleDetailToggle(option)}
                  sx={{
                    backgroundColor: selectedDetails.includes(option) ? '#263238' : '#7E7EFF',
                    color: '#fff',
                    fontWeight: 600,
                  }}
                />
              ))}
          </Box>
                  
          <Box display="flex" justifyContent="flex-end">
            <IconButton color="inherit" size="large" onClick={() => navigate('/user/register-form')}>
              <img src={ArrowIcon} alt="Avançar" width={24} height={24} />
            </IconButton>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};