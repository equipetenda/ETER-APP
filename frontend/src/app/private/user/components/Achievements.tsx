import { Box, Typography } from '@mui/material';

// Example icon imports
import Icon1 from '../../../../assets/Journeytime.png';
import Icon2 from '../../../../assets/frequency.png';
import Icon3 from '../../../../assets/happier.png';
import Icon4 from '../../../../assets/moreAchievements.png';

const achievements = [
  { icon: Icon1, progress: 1 },
  { icon: Icon2, progress: 2 },
  { icon: Icon3, progress: 3 },
  { icon: Icon4, progress: 4 },
];

export const Achievements = () => {
  return (
    <Box sx={{ px: 2, mt: 5 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Conquistas
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {achievements.map((ach, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Icon without background */}
            <Box
              sx={{
                width: 88, // Updated width
                height: 100, // Updated height
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={ach.icon} alt={`Icon ${index}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Box>

            {/* Progress indicator */}
  
          </Box>
        ))}
      </Box>
    </Box>
  );
};