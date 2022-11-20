import Axios, { AxiosRequestConfig } from "axios";

export interface Credentials {
  email: string;
  password: string;
  name?:string;
}



export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: "https://firebase-auth-backend.herokuapp.com/login", 
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



export const onRegister = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: "https://firebase-auth-backend.herokuapp.com/register",
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
