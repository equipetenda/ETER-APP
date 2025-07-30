import React from 'react';
import ImportIcon from '../../../../assets/AlertButton.png'; // Ensure the correct path

interface FloatingButtonProps {
  onClick: () => void; // Type definition for the onClick prop
  sx?: React.CSSProperties; // Optional prop for additional styles
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, sx }) => {
  return (
    <div
      style={{
        width: '73px',
        height: '57px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#656FDF', // Background for visibility
        borderRadius: '30px', // Rounded corners
        zIndex: 2, // Higher z-index to float above the BottomNavigation
        cursor: 'pointer', // Cursor pointer for better UX
        ...sx, // Merge additional styles
      }}
      onClick={onClick} 
    >
      <img src={ImportIcon} alt="Import" width={100} height={90} />
    </div>
  );
};

export default FloatingButton;