import { userFormData } from "@/model/User";
import {apiClient_1} from "../lib/apiClient";
import { loginUserFormData } from "@/model/User";

export const saveUser = async(user:userFormData) =>{
    const response = await apiClient_1.post('/users/register',user)
    console.log("return response data",response.data);
    return response.data
}

export const login = async(user:loginUserFormData) =>{
    const response = await apiClient_1.post('/users/login',user)
    console.log("return response data",response.data);
    return response.data
}