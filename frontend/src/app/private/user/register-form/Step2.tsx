// Step2.tsx
import { Box, Button, Typography, Chip } from '@mui/material';
import { useState } from 'react';
import { FormStepLayout } from './FormStepLayout';

const sintomasList = [
  'Ansiedade intensa',
  'Dificuldade de concentração',
  'Tontura ou vertigem',
  'Fadiga extrema',
  'Dores de cabeça',
  'Suor excessivo',
];

export const Step2 = ({ value, onChange, onNext, onBack }: any) => {
  const [selected, setSelected] = useState<string[]>(value || []);

  const toggle = (sintoma: string) => {
    const updated = selected.includes(sintoma)
      ? selected.filter((s) => s !== sintoma)
      : [...selected, sintoma];
    setSelected(updated);
    onChange(updated);
  };

  return (
    <FormStepLayout step={1} onBack={onBack}>
      <Box>
        <Typography variant="h5" fontWeight="bold" color="#6C63FF" mb={1}>
          Quais os sintomas?
        </Typography>
        <Typography mb={2}>Selecione entre as opções abaixo:</Typography>

        <Box display="flex" flexDirection="column" gap={2} mb={3}>
          {sintomasList.map((sintoma) => (
            <Chip
              key={sintoma}
              label={sintoma} // Usando o sintoma diretamente como texto do chip
              clickable
              onClick={() => toggle(sintoma)}
              sx={{
                bgcolor: selected.includes(sintoma) ? '#6C63FF' : '#e8eafa', // Cor de fundo
                color: selected.includes(sintoma) ? '#fff' : '#000',
                borderRadius: '8px', // Cantos arredondados
                height: '68px', // Altura do chip
                display: 'flex', // Para manter o alinhamento interno
                justifyContent: 'flex-start', // Alinha o texto à esquerda
                alignItems: 'center', // Centraliza verticalmente
                padding: '0 16px', // Adiciona um pouco de padding lateral
                fontSize: '20px', // Ajuste de fonte
              }}
            />
          ))}
        </Box>
      </Box>

      <Box>
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#233D4D',
            borderRadius: '12px',
            py: 1.5,
            fontWeight: 'bold',
          }}
          onClick={onNext}
        >
          Continuar
        </Button>
        <Typography align="center" mt={1} fontSize={12}>
          Prefiro não responder hoje
        </Typography>
      </Box>
    </FormStepLayout>
  );
};