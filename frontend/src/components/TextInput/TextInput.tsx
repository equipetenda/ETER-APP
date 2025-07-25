import { TextField, TextFieldProps } from '@mui/material';

export const TextInput = (props: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      InputProps={{
        sx: {
          fontFamily: 'Poppins',
          color: '#000',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#9747FF', // Cor da borda quando o campo está focado
          },
        },
      }}
      InputLabelProps={{
        sx: {
          fontFamily: 'Poppins',
          color: '#666',
        },
      }}
      {...props}
    />
  );
};