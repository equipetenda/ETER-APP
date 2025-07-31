import { useState } from 'react';
import { FormStepData } from './types';

export const useRegisterSteps = () => {
  const [step, setStep] = useState(0);
  const [formDataRegisterSteps, setFormDataRegisterSteps] = useState<FormStepData>({
    motivo: '',
    sintomas: [],
    confianca: 0,
  });

  const updateData = (data: Partial<FormStepData>) => {
    setFormDataRegisterSteps((prev) => ({ ...prev, ...data }));
  };

  return {
    step,
    formDataRegisterSteps,
    setStep,
    updateData,
  };
};
