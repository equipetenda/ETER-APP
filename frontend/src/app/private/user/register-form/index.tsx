import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { useRegisterSteps } from './useRegisterSteps';
import { useDiaryHome } from '../../../public/user/diary-home/DiaryHomeContext';

import { useNavigate } from 'react-router-dom';
import { useRegisterForm } from '../../../public/user/register/RegisterContext';
import { UserService } from '../../../../services/UserService';
import { sentimentoConversion } from '../../../../utilities/sentimento';
import { emocaoConversion } from '../../../../utilities/emocao';
import { sintomaConversion } from '../../../../utilities/sintoma';
import { DiaryService } from '../../../../services/DiaryService';

export const RegisterForm = () => {
  const { step, setStep, formDataRegisterSteps, updateData } = useRegisterSteps();
  const { formDataDiaryHome } = useDiaryHome();
  const { formData } = useRegisterForm(); 

  const navigate = useNavigate();

  const steps = [
    <Step1
      key="1"
      onNext={() => setStep(1)}     
      
      value={ formDataRegisterSteps.motivo   }
      onChange={(v: string) =>{
        updateData({ motivo: v })      

      } }
    />,
    <Step2
      key="2"
      onNext={() => setStep(2)}
      value={formDataRegisterSteps.sintomas}   
      onChange={
        (v: [string]) => {
          updateData({ sintomas: v })         
        }
      }
    />,
    <Step3
      key="3"
      value={
        
          formDataRegisterSteps.confianca
         
        }      
      onChange={
        (v: number) => {
          updateData({ confianca: v })
          
        }
          

      }
      onFinish={async () => {
        try {
        

        formDataDiaryHome.textos.push(formDataRegisterSteps.motivo)
        formDataDiaryHome.escala_confianca = formDataRegisterSteps.confianca
        
        formDataDiaryHome.sintomas = sintomaConversion(formDataRegisterSteps.sintomas)
        formDataDiaryHome.emocoes = emocaoConversion(formDataDiaryHome.emocoes)
        formDataDiaryHome.sentimentos = sentimentoConversion(formDataDiaryHome.sentimentos)  
        
        const data = await UserService.getUserByEmail(formData.email)
        formDataDiaryHome.usuario_id = data.data.id

         const reponse = await DiaryService.create(formDataDiaryHome)
         console.log(reponse)
        navigate('/home');
          
        } catch (error) {
          console.log('Falha no engano')
        }
        
        console.log(formDataDiaryHome)
      }
        
        
      }
    />,
  ];

  return steps[step];
};
