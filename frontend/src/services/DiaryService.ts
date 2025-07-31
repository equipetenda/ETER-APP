import axios from 'axios';
import { env } from '../environment'; 

import { ApiResponse } from '../types/ApiResponseInterface';
import { DiaryHomeFormData } from '../types/DiaryHomeFormData';


const apiClient = axios.create({
  baseURL: env.url, 
  headers: {
    'Content-Type': 'application/json',
  },
});


export class DiaryService {
  
  static async create(data: DiaryHomeFormData): Promise<ApiResponse<any>> {
    try {
     
      const endpoint = 'diario/store-home'; 
      
      console.log('Enviando para API:', data);       
      
      const response = await apiClient.post(endpoint, data);      
    
      return response.data;

    } catch (error) {      
      console.error('Erro ao criar diario:', error);      
     
      throw error;
    }
  }

  
}