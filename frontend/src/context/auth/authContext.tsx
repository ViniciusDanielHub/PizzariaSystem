import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import Router from 'next/router'

import { api } from 'services/apiClient';

import { destroyCookie, setCookie, parseCookies } from 'nookies';

import { toast } from 'react-toastify';

import { IAuthentication, IAuthProvider, IContext, IRegister, IUser } from './types';

export const AuthContext = createContext({} as IContext)

export function signOut() {
  try{
    destroyCookie(undefined, '@nextauth.token')
    Router.push('/')
  }catch{
    console.log('erro ao deslogar')
  }
}

export function AuthProvider({children}: IAuthProvider){
  const [user, setUser] = useState<IUser>()
  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@nextauth.token': token } = parseCookies();

    if(token) {
      api.get('/me').then(response => {
        const {id, name, email} = response.data;

        setUser({
          id,
          name,
          email
        })
      })
      .catch(() => {
        signOut();
      })
    }
  }, [])

  async function signIn({email, password}: IAuthentication) {
    try{
       const response = await api.post('/session', {
        email,
        password
       })

       const {id, name, token} = response.data;

      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      setUser({
        id,
        name,
        email,
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      toast.success('Logado Com Sucesso')

      Router.push('/dashboard');

    }catch(err){
      toast.error('Erro Ao Logar')
       console.log('erro ao logar', err) 
    }
  }

  async function signUp({name, email, password}: IRegister) {
    try{

      const response = await api.post('/users', {
        name,
        email,
        password
      })

      console.log('CADASTRADO COM SUCESSO')

      toast.success('Cadastrado Com Sucesso')

      Router.push('/')

    }catch(err){
      toast.error('Erro Ao Cadastrar')
      console.log('ERRO NO CADASTRO', err)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp}}>
      {children}
    </AuthContext.Provider>
  )
}
