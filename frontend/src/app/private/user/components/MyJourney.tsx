import { Box, Typography } from '@mui/material';
import CheckIcon from '../../../../assets/check.png';
import LocalIcon from '../../../../assets/current.png';
import LockIcon from '../../../../assets/lock.png';

const etapas = [
  { status: 'done', icon: CheckIcon },
  { status: 'done', icon: CheckIcon },
  { status: 'current', icon: LocalIcon },
  { status: 'locked', icon: LockIcon },
  { status: 'locked', icon: LockIcon },
];

export const MyJourney = () => {
  return (
    <Box px={2} mb={3}>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography fontWeight={600}>Minha jornada</Typography>
        <Typography fontSize="12px" color="gray">
          desde 24/02/2025
        </Typography>
      </Box>

      <Box
        sx={{
          border: '2px solid #7E7EFF',
          borderRadius: '16px',
          p: 2,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {etapas.map(({ icon, status }, index) => (
        <Box
                key={index}
                sx={{
                    width: status === 'current' ? 56 : 44,
                    height: status === 'current' ? 56 : 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                <img
                    src={icon}
                    alt={status}
                    style={{
                    width: status === 'current' ? 48 : 40,
                    height: status === 'current' ? 48 : 40,
                    }}
                />
                </Box>
        ))}
      </Box>
    </Box>
  );
};
