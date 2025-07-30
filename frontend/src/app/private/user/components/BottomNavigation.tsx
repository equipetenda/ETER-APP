import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useState } from 'react';
import HomeIcon from '../../../../assets/home.png';
import DiaryIcon from '../../../../assets/diary.png';

export const BottomNavigationBar = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '430px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        sx={{
          bgcolor: '#fff',
          height: 60,
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<img src={HomeIcon} alt="Home" width={24} height={24} />}
          sx={{ marginRight: 6  }} // Add margin-right for spacing
        />
        
        <BottomNavigationAction
          label="Diário"
          icon={<img src={DiaryIcon} alt="Diário" width={24} height={24} />}
        />
      </BottomNavigation>
    </Paper>
  );
};