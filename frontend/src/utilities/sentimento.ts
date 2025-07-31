import { DiaryHomeFormData } from "../types/DiaryHomeFormData";

export const sentimentoConversion = (data:string[])=>{
    const sentimentoMap: { [key: string]: string } = {
        'feliz': '1',
        'animado': '2',
        'nervoso': '3',
        'ansioso': '4',
        'deprimido': '5',
        'entediado': '6',
        'zangado': '7',  
        'enjoado': '8',
      };
      
      let dataToSend = { ...data };          

      dataToSend = data.map(sentimento=>{
          return sentimentoMap[sentimento.toLowerCase()]
      });    

      return dataToSend
  }

  

