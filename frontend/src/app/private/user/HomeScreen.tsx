import { HeaderUserInfo } from './components/HeaderUserInfo';
import { BottomNavigationBar } from './components/BottomNavigation';
import { FloatingButton } from './components/FloatingAllertButton'; // Import your new FloatingButton component
import { Box } from '@mui/material';
import { MoodSelector } from './components/MoodSelector';
import { MyJourney } from './components/MyJourney';
import { DailyRegister } from './components/DailyRegister';
import { SharedJourney } from './components/SharedJourney';
import { Achievements } from './components/Achievements';

export const HomeScreen = () => {
  const handleFloatingButtonClick = () => {
    console.log('Center button clicked'); // Replace with your desired functionality
  };

  return (
    <Box
      sx={{
        width: '430px',
        height: '932px',
        bgcolor: '#F5F5F5',
        mx: 'auto',
        position: 'relative',
        borderRadius: '24px',
        boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <HeaderUserInfo />

      {/* Scrollable Content */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          px: '10px',
          pt: '100px', // espaço para o Header
          pb: '100px', // espaço para o BottomNavigation
          scrollbarWidth: 'none', // Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // Chrome
          },
        }}
      >
        <MyJourney />
        <MoodSelector />
        <DailyRegister />
        <SharedJourney />
        <Achievements />
      </Box>

      {/* Bottom Navigation fixo */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 90,
          left: 0,
          width: '100%',
        }}
      >
        <BottomNavigationBar />
      </Box>

      {/* Floating Button positioned at the center bottom */}
      <FloatingButton 
        onClick={handleFloatingButtonClick}
        sx={{
          position: 'fixed',
          bottom: '30px', // Adjust this value to position it more integrated with the BottomNavigation
          left: '50%',
          transform: 'translateX(-50%)',
        }} 
      />
    </Box>
  );
};