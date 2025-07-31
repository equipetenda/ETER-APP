import { createContext, useContext, useState } from "react";

import { DiaryHomeFormData as DiaryHomeData } from "../../../../types/DiaryHomeFormData";

type DiaryHomeContextType = {
  formDataDiaryHome: DiaryHomeData;  
};

const defaultValues: DiaryHomeData = {
  usuario_id: '',
  escala_confianca: 0,
  sintomas:[],
  emocoes:[],
  sentimentos:[],
  textos:[]
};


const DiaryHomeContext = createContext<DiaryHomeContextType | undefined>(undefined);

export const DiaryHomeProvider = ({ children }: { children: React.ReactNode }) => {
  const [formDataDiaryHome, setformDataDiaryHome] = useState<DiaryHomeData>(defaultValues);
  
  return (
    <DiaryHomeContext.Provider value={{ formDataDiaryHome }}>
      {children}
    </DiaryHomeContext.Provider>
  );
};

export const useDiaryHome = () => {
  const context = useContext(DiaryHomeContext);
  if (!context) throw new Error("useDiaryHome must be used within a DiaryHomeProvider");
  return context;
};
