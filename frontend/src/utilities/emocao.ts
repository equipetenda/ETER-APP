//import { DiaryHomeFormData } from "../types/DiaryHomeFormData";

export const emocaoConversion = (data: string[]) => {
  const emocaoMap: { [key: string]: string } = {
  'satisfação': '1',
  'gratidão': '2',
  'paz': '3',
  'bem-estar': '4',
  'entusiasmo': '5',
  'realização': '6',
  'energia': '7',
  'motivação': '8',
  'otimismo': '9',
  'esperança': '10',
  'alegria': '11',
  'euforia': '12',
  'insegurança': '13',
  'estresse': '14',
  'tensão': '15',
  'frustração': '16',
  'desconforto': '17',
  'impaciência': '18',
  'preocupação': '19',
  'inquietação': '20',
  'alerta': '21',
  'incerteza': '22',
  'medo': '23',
  'tristeza': '24',
  'vazio': '25',
  'culpa': '26',
  'desamparo': '27',
  'desânimo': '28',
  'solidão': '29',
  'cansaço': '30',
  'falta de estímulo': '31',
  'desinteresse': '32',
  'letargia': '33',
  'monotonia': '34',
  'irritação': '35',
  'raiva': '36',
  'resentimento': '37',
  'fúria': '38',
  'náusea': '39',
  'mal-estar': '40',
  'fadiga': '41',
  'sensibilidade': '42',
  'exaustão': '43'
};

  let dataToSend = { ...data };

  dataToSend = data.map(emocao => {
    const emocaoLower = emocao.toLowerCase();
    return emocaoMap[emocaoLower];
  });

  return dataToSend;
};