import Head from 'next/head';

import * as S from './styles'

import { Header } from 'components/Header';
import { FormEvent, useState } from 'react';
import UserSession from 'pages/usersession';
import { toast } from 'react-toastify';
import { Button } from 'components/ui/Button';
import { GetServerSidePropsContext } from 'next';
import { Input } from 'components/ui/Input';
import { setupAPIClient } from 'services/api/api';
import { canSSRAuth } from 'utils/canSSRAuth';

export default function Category() {
  const [name, setName] = useState('')

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    const apiClient = setupAPIClient()
    await apiClient.post('/category',{
      name: name
    })

    setName('')
  }
  return (
    <>
      <Head>
        <title>Nova Categoria - Pizzaria System</title>
      </Head>

      <Header />
      <S.Container>
        <S.RegistrationText>Cadastrar Categorias</S.RegistrationText>

        <S.FormCategory onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder='Digite O Nome Da Categoria'
            value={name}
            onChange={(e) => setName(e.target.value)}
            >
            </Input>

        <Button type='submit' text='Cadastrar'/>
        </S.FormCategory>

      </S.Container>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props: {}
  }
})