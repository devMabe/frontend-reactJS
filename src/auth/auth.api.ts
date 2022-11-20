import Axios, { AxiosRequestConfig } from "axios";
import { API_BASE_URL } from '../config';
export interface Credentials {
  email: string;
  password: string;
  name?:string;
}

//https://firebase-auth-backend.herokuapp.com

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: API_BASE_URL+"/login", 
    data,
  };

  try {
    const { data: response } = await Axios.request(requestConfig);
    return response;
    
  }catch (e:any){
    console.error(e);
    return { error: e.response.data.message }
  }
  
};


export const onGreetings = async (token: string) => {
  let headers = {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": 'Bearer ' + token
  };
  const requestConfig: AxiosRequestConfig = {
    method: "get",
    url: API_BASE_URL+"/greetings",
    headers: headers
  }

  try {
    const { data: response}  = await Axios.request(requestConfig); 
    console.log();
    return { response }
  } catch (e:any) {
    return { error: e.response }
  }
}


export const onRegister = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: API_BASE_URL+"/register",
    data,
  };

  try {
    const { data: response } = await Axios.request(requestConfig);
    console.log(response)
  }catch (e:any){
    console.error(e);
    return { error: e.response.data.message }
  }
  
};
