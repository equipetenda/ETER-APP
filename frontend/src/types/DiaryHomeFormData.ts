import { MoodKey } from "./MoodKey";


export type DiaryHomeFormData = {
  usuario_id: string;
  escala_confianca: number;
  sintomas:Array<string>;
  emocoes:Array<MoodKey | string>;
  sentimentos:Array<MoodKey | string>;
  textos:string[];
};