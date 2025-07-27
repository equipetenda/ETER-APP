import { RegisterFormData } from "../types/RegisterFormData";

export const genderConversion = (data:RegisterFormData)=>{
    const generoMap: { [key: string]: string } = {
        'masculino': '1',
        'feminino': '2',
        'não-binário': '3',
        'prefiro não responder': '4',
        'outro': '5',
      };
      
      const dataToSend = { ...data };
      
      
      const generoNome = data.genero_id.toLowerCase();
      
      if (generoMap[generoNome]) {        
        dataToSend.genero_id = generoMap[generoNome];
      }

      return dataToSend
  }

