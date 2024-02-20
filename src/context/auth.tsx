import { createContext, useState } from "react";
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { IAuthContext, IAuthContextProviderProps, IUser, IloginData } from "./types";
import axios from 'axios';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({
  children
} : IAuthContextProviderProps ) => {

  const [ user, setUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();

  const handleLogin = async (loginData: IloginData) => {
    const params = {
      username: loginData.email,
      password: loginData.senha
    };
    try{
      const { data } = await api.get('/login', {
        params: params
      });
      if( data !== undefined ){
        const dataUser = {
          objectId: data.objectId,
          username: data.username,
          email: data.email
        };
        setUser(dataUser);
        navigate('/home');
      }else{
        alert('Email ou senha invalido');
      }
    }catch{
      alert('Email ou senha invalido');
    }
  }

  const handleSignUp = async (loginData: IloginData) => {
    try{
      const response = await axios.post('https://parseapi.back4app.com/users',
       {
        username: loginData.email,
        email: loginData.email,
        password: loginData.senha, 
      },
       {
        headers: {
          'X-Parse-Application-Id': 'lbrQhnvkld8gfIs0NPuSuyxis8SjPJo6ztnsN9eF',
          'X-Parse-REST-API-Key': 'U9IGOgRvhsCcobk8DBDdN4iNSC8pThsYxTb0fOvt',
          'X-Parse-Revocable-Session': '1',
          'Content-Type': 'application/json',
        },
      }
       );
      if(response.data){
        const dataUser = {
          objectId: response.data.objectId,
          username: response.data.username,
          email: response.data.email
        };
        setUser(dataUser);
        navigate('/home');
      }
      
    }catch{
      alert('Email ou senha invalido');
    }
  }

  const handleSignOut = () => {
    setUser({} as IUser);
    navigate('/');
  }

  
  return (
  <AuthContext.Provider value={{user, handleLogin, handleSignOut, handleSignUp}}>
    {children}
  </AuthContext.Provider>
  )
  
}