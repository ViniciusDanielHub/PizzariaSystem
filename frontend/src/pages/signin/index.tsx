import { FormEvent, useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import * as S from './styles'

import logoImg from '../../../public/img/LogoPizzariaSystem.svg'

import { Input } from 'components/ui/Input';

import { Button } from 'components/ui/Button';

import Link from 'next/link';
import { AuthContext } from 'context/auth/authContext';
import { useAuth } from 'context/auth/useAuth';

import { GetServerSideProps } from 'next';

import { canSSRGuest } from 'utils/canSSRGuest';

export default function SignIn() {

  const {signIn} = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSignIn (event: FormEvent) {
    event.preventDefault();

      let data = {
        email,
        password
      }

      await signIn(data)
  }

  return(
    <>
     <Head>
      <title>Pizzaria System - Login</title>
     </Head>

     <S.ContainerCenter>
      <Image src={logoImg} alt="Pizzaria System Logo" />

      <S.FormLogin>
        <S.Form onSubmit={handleSignIn}>

          <Input 
            type="text"
            placeholder='Digite Seu E-mail'
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
           />

            <Input 
              type="password"
              placeholder='Digite Sua Senha' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             />

            <Button 
              type='submit' 
              text='Entrar' 
            />
        </S.Form>

          <Link href="/signup">
            <S.NotAccountText>
              Nao possui uma conta? Cadastre-se
            </S.NotAccountText>
          </Link>
      </S.FormLogin>
     </S.ContainerCenter>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  
  return{
    props:{}
  }
})