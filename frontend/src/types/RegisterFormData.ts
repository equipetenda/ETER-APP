export type RegisterFormData = {
  email: string;
  nome: string;
   data_nasc: string;
  genero_id: string;
  data_parar_fumar: string; //quitDate
  quando_deseja_parar_fumar: string; //quitintent
  motivo_parar_fumar: string;
  medo_preocupacao_fumar: string;
  quando_comecou_fumar: string;
  tentativas_parar_fumar: string; //SmokeHabitStep7
  motivos_desistencias: string;
  data_inicio_fumar: string;
  quant_cigarros_por_dias: number; //SmokeHabitStep8
  quant_cigarros_por_maco: number; //SmokeHabitStep9
  valor_maco: string; //Cigarette
};