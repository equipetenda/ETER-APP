import { useState } from 'react';
import { FormStepData } from './types';

export const useRegisterSteps = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormStepData>({
    motivo: '',
    sintomas: [],
    confianca: 0,
  });

  const updateData = (data: Partial<FormStepData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return {
    step,
    formData,
    setStep,
    updateData,
  };
};
