import { useRegisterForm } from "./RegisterContext";
import { WelcomeStep1 } from "./steps/WelcomeStep1";
import { WelcomeStep2 } from "./steps/WelcomeStep2";
import { NameStep3 } from "./steps/NameStep3";
import { GenderStep4 } from "./steps/GenderStep4";
import { QuitIntentStep5 } from "./steps/QuitIntentStep5";
import { QuitDateStep6 } from "./steps/QuitDateStep6";
import { SmokeHabitStep7 } from "./steps/SmokeHabitStep7";
import { SmokeHabitStep8 } from "./steps/SmokeHabitStep8";
import { SmokeHabitStep9 } from "./steps/SmokeHabitStep9";
import { CigaretteQuantStep10 } from "./steps/CigaretteQuantStep10";
import { FinalStep } from "./steps/FinalStep";

export const Register = () => {
    const { formData, step } = useRegisterForm();
  
    const renderStep = () => {
      switch (step) {
        case 0: return <WelcomeStep1 />;
        case 1: return <WelcomeStep2 />;
        case 2: return <NameStep3 />;
        case 3: return <GenderStep4 />;
        case 4: return <QuitIntentStep5 />;
        case 5: return <QuitDateStep6 />;
        case 6: return <SmokeHabitStep7 />;
        case 7: return <SmokeHabitStep8 />;
        case 8: return <SmokeHabitStep9 />;
        case 9: return <CigaretteQuantStep10 />;
        case 10: return <FinalStep />;
        default: return <div>Formulário finalizado!</div>;
      }
    };
  
    return <>{renderStep()}</>;
  };
  
