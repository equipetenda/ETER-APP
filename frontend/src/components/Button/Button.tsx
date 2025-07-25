import { Button } from '@mui/material';

interface Props {
  onClick: () => void;
  label?: string;
}

export const PrimaryButton = ({ onClick, label = 'Continuar' }: Props) => (
  <Button
    onClick={onClick}
    variant="contained"
    sx={{
      marginTop: 4,
      backgroundColor: '#8E2DE2',
      fontFamily: 'Poppins',
      paddingX: 4,
      paddingY: 1,
      borderRadius: 8,
      boxShadow: 2,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#6519b9',
      },
    }}
    fullWidth
  >
    {label}
  </Button>
);
