// FormStepLayout.tsx
import { Box } from '@mui/material';
import { ReactNode } from 'react';
import ArrowIcon from '../../../../assets/arrow_back.png'; // ajuste o path conforme sua estrutura

export const FormStepLayout = ({
  children,
  step,
  totalSteps = 3,
  onBack,
}: {
  children: ReactNode;
  step: number;
  totalSteps?: number;
  onBack?: () => void;
}) => {
  return (
    <Box
      sx={{
        width: '430px',
        height: '932px',
        mx: 'auto',
        bgcolor: '#F5F5F5',
        borderRadius: '24px',
        boxShadow: '0 0 12px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        p: 0,
        position: 'relative',
      }}
    >
      {/* Seta de voltar */}
      {onBack && (
        <Box position="absolute" top={16} left={16} zIndex={1}> {/* Adicionei zIndex para garantir que o ícone permaneça visível */}
          <img
            src={ArrowIcon}
            alt="Voltar"
            width={24}
            height={24}
            style={{ cursor: 'pointer' }}
            onClick={onBack}
          />
        </Box>
      )}

      {/* Barra de progresso */}
      <Box display="flex" justifyContent="center" pt={2} gap={1}>
        {Array.from({ length: totalSteps }).map((_, i) => (
          <Box
            key={i}
            sx={{
              width: 40,
              height: 4,
              borderRadius: 2,
              bgcolor:
                i === step ? '#6C63FF' : i < step ? '#B0B0B0' : '#E0E0E0',
            }}
          />
        ))}
      </Box>

      {/* Conteúdo */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          px: 3,
          pt: '120px',
          pb: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};