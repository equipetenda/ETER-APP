import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { useRegisterSteps } from './useRegisterSteps';

export const RegisterForm = () => {
  const { step, setStep, formData, updateData } = useRegisterSteps();

  const steps = [
    <Step1
      key="1"
      onNext={() => setStep(1)}
      value={formData.motivo}
      onChange={(v: string) => updateData({ motivo: v })}
    />,
    <Step2
      key="2"
      onNext={() => setStep(2)}
      value={formData.sintomas}
      onChange={(v: [string]) => updateData({ sintomas: v })}
    />,
    <Step3
      key="3"
      value={formData.confianca}
      onChange={(v: number) => updateData({ confianca: v })}
      onFinish={() => console.log(formData)}
    />,
  ];

  return steps[step];
};
