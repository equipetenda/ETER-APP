import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import CalendarToday from '@mui/icons-material/CalendarToday';

interface DateTextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; // Propriedade opcional para texto de placeholder
  sx?: React.CSSProperties; // Define a propriedade 'sx' como opcional
}

const DateTextField: React.FC<DateTextFieldProps> = ({ value, onChange, placeholder, sx }) => {
  return (
    <TextField
      type="date"
      fullWidth
      value={value}
      onChange={onChange}
      sx={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
          '& fieldset': { border: 'none' }, // Remove a borda do fieldset
        },
        ...sx, // Aplica estilos passados via prop 'sx'
      }}
      placeholder={placeholder}
      // Adiciona o ícone ao campo de data
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <CalendarToday sx={{ color: '#A18EFF' }} />
          </InputAdornment>
        ),
      }}
      inputProps={{
        style: {
          paddingLeft: '24px', // Espaço para o ícone
        },
      }}
    />
  );
};

export default DateTextField;