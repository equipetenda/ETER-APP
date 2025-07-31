import axios from 'axios';
import { env } from '../../src/environment'; 

import { RegisterFormData } from "../../src/types/RegisterFormData";
import { ApiResponse } from '../types/ApiResponseInterface';

const apiClient = axios.create({
  baseURL: env.url, 
  headers: {
    'Content-Type': 'application/json',
  },
});


export class UserService {
  
  static async create(data: RegisterFormData): Promise<ApiResponse<any>> {
    try {
     
      const endpoint = 'usuario/store'; 
      
      console.log('Enviando para API:', data);       
      
      const response = await apiClient.post(endpoint, data);      
    
      return response.data;

    } catch (error) {      
      console.error('Erro ao criar usuário:', error);      
     
      throw error;
    }
  }

  static async getUserByEmail(email: string): Promise<ApiResponse<any>> {
    try {
      
      const endpoint = `usuario/get-one/${email}`;
      
      console.log(`Buscando usuário com e-mail: ${email}`);      
      
      const response = await apiClient.get(endpoint);      
      
      return response.data;

    } catch (error) {      
      console.error(`Erro ao buscar usuário pelo e-mail ${email}:`, error);      
      
      throw error;
    }
  }

  
}