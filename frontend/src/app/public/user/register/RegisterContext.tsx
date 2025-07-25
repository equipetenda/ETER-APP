// import { createContext, useContext, useReducer, ReactNode } from 'react';

// // Tipos
// interface RegisterState {
//   step: number;
//   formData: {
//     name: string;
//     email: string;
//     gender: string;
//     quitDate: string;
//     attemptCount: string;
//     cigPerDay: string;
//     cigPerPack: string;
//     packPrice: string;
//   };
// }

// type RegisterAction =
//   | { type: 'NEXT_STEP' }
//   | { type: 'PREV_STEP' }
//   | { type: 'SET_STEP'; payload: number }
//   | { type: 'UPDATE_FIELD'; field: keyof RegisterState['formData']; value: string };

// // Estado inicial
// const initialState: RegisterState = {
//   step: 0,
//   formData: {
//     name: '',
//     email: '',
//     gender: '',
//     quitDate: '',
//     attemptCount: '',
//     cigPerDay: '',
//     cigPerPack: '',
//     packPrice: '',
//   },
// };

// // Reducer
// function registerReducer(state: RegisterState, action: RegisterAction): RegisterState {
//   switch (action.type) {
//     case 'NEXT_STEP':
//       return { ...state, step: state.step + 1 };
//     case 'PREV_STEP':
//       return { ...state, step: state.step - 1 };
//     case 'SET_STEP':
//       return { ...state, step: action.payload };
//     case 'UPDATE_FIELD':
//       return {
//         ...state,
//         formData: { ...state.formData, [action.field]: action.value },
//       };
//     default:
//       return state;
//   }
// }

// // Contexto
// const RegisterContext = createContext<{
//   state: RegisterState;
//   dispatch: React.Dispatch<RegisterAction>;
//   updateField: (field: keyof RegisterState['formData'], value: string) => void;
//   nextStep: () => void;
//   prevStep: () => void;
//   setStep: (step: number) => void;
// } | undefined>(undefined);

// // Provedor
// export const RegisterProvider = ({ children }: { children: ReactNode }) => {
//   const [state, dispatch] = useReducer(registerReducer, initialState);

//   const updateField = (field: keyof RegisterState['formData'], value: string) => {
//     dispatch({ type: 'UPDATE_FIELD', field, value });
//   };

//   const nextStep = () => dispatch({ type: 'NEXT_STEP' });
//   const prevStep = () => dispatch({ type: 'PREV_STEP' });
//   const setStep = (step: number) => dispatch({ type: 'SET_STEP', payload: step });

//   return (
//     <RegisterContext.Provider
//       value={{ state, dispatch, updateField, nextStep, prevStep, setStep }}
//     >
//       {children}
//     </RegisterContext.Provider>
//   );
// };

// // Hook de acesso
// export const useRegisterForm = () => {
//   const context = useContext(RegisterContext);
//   if (!context) throw new Error('useRegisterForm must be used within RegisterProvider');
//   return context;
// };
import { createContext, useContext, useState } from "react";

type RegisterFormData = {
  email: string;
  nome: string;
   data_nasc: string;
  genero_id: string;
  data_parar_fumar: string; //quitDate
  quando_deseja_parar_fumar: string; //quitintent
  motivo_parar_fumar: string;
  medo_preocupacao_fumar: string[];
  quando_comecou_fumar: string;
  tentativas_parar_fumar: string; //SmokeHabitStep7
  motivos_desistencias: string;
  data_inicio_fumar: string;
  quant_cigarros_por_dias: number; //SmokeHabitStep8
  quant_cigarros_por_maco: number; //SmokeHabitStep9
  valor_maco: string; //Cigarette
};

type RegisterFormContextType = {
  formData: RegisterFormData;
  updateField: <K extends keyof RegisterFormData>(field: K, value: RegisterFormData[K]) => void;
  step: number;
  setStep: (step: number) => void;
};

const defaultValues: RegisterFormData = {
  email: "",
  nome: "",
  data_nasc: "",
  genero_id: "",
  data_parar_fumar: "",
  quando_deseja_parar_fumar: "",
  motivo_parar_fumar: "",
  medo_preocupacao_fumar: [],
  quando_comecou_fumar: "",
  tentativas_parar_fumar: "",
  motivos_desistencias: "",
  data_inicio_fumar: "",
  quant_cigarros_por_dias: 0,
  quant_cigarros_por_maco: 0,
  valor_maco: "",
};

const RegisterFormContext = createContext<RegisterFormContextType | undefined>(undefined);

export const RegisterFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<RegisterFormData>(defaultValues);
  const [step, setStep] = useState(1);

  const updateField = <K extends keyof RegisterFormData>(field: K, value: RegisterFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <RegisterFormContext.Provider value={{ formData, updateField, step, setStep }}>
      {children}
    </RegisterFormContext.Provider>
  );
};

export const useRegisterForm = () => {
  const context = useContext(RegisterFormContext);
  if (!context) throw new Error("useRegisterForm must be used within a RegisterFormProvider");
  return context;
};
