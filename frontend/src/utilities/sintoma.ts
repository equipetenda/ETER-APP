import { DiaryHomeFormData } from "../types/DiaryHomeFormData";

export const sintomaConversion = (data:string[])=>{
    const sintomaMap: { [key: string]: string } = {
        'ansiedade intensa': '1',
        'dificuldade de concentração': '2',
        'tontura ou vertigem': '3',
        'fadiga extrema': '4',
        'dores de cabeça': '5',
        'suor excessivo': '6',  
      };
      
      let dataToSend = { ...data };          

      dataToSend = data.map(sintoma=>{
          return sintomaMap[sintoma.toLowerCase()]
      });    

      return dataToSend
  }

  

