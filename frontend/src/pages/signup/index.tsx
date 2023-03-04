import Head from 'next/head';
import Image from 'next/image';
import * as S from './styles'

import logoImg from '../../../public/img/LogoPizzariaSystem.svg'

import { Input } from 'components/ui/Input';

import { Button } from 'components/ui/Button';

import Link from 'next/link';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from 'context/auth/authContext';
import { useAuth } from 'context/auth/useAuth';

export default function SignUp() {
  const {signUp} = useContext(AuthContext)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    let data = {
      name,
      email, 
      password
    }

    await signUp(data)
  }

  return (
    <>
      <Head>
        <title>Pizzaria System - Cadastro</title>
      </Head>

      <S.ContainerCenter>
        <Image src={logoImg} alt="Pizzaria System Logo" />

        <S.FormLogin>
          <S.CreateAccountText>Criando Sua Conta</S.CreateAccountText>

          <S.Form onSubmit={handleSignUp}>
            <Input
              type="text"
              placeholder='Digite Seu Nome'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              type="text"
              placeholder='Digite Seu Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder='Digite Sua Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type='submit' text='Cadastrar' loading={loading}/>
          </S.Form>
        </S.FormLogin>
      </S.ContainerCenter>
    </>
  )
}