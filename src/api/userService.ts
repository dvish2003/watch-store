import { userFormData } from "@/model/User";
import {apiClient_1, apiClient_2} from "../lib/apiClient";
import { loginUserFormData } from "@/model/User";

export const saveUser = async(user:userFormData) =>{
    console.log('user form data : ',user)
    const response = await apiClient_1.post('/users/register',user)
    console.log("return response data",response.data);
    return response.data
}

export const login = async(user:loginUserFormData) =>{
    console.log('user form data : ',user)
    const response = await apiClient_1.post('/users/login',user)
    console.log("return response data",response.data);
    return response.data
}

export const getUser = async(user:userFormData) =>{
  
}

export const getAll = async() =>{
  
}