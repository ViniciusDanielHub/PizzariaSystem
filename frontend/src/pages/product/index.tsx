import Head from 'next/head';

import * as S from './styles'

import { Input } from 'components/ui/Input';
import { Button } from 'components/ui/Button';
import { Header } from 'components/Header';

import { FiUpload } from 'react-icons/fi';

import UserSession from 'pages/usersession';
import { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import { GetServerSidePropsContext } from 'next';
import { getTokenLocalStorage } from 'context/auth/util';
import { canSSRAuth } from 'utils/canSSRAuth';
import { setupAPIClient } from 'services/api/api';
import { toast } from 'react-toastify';

type ItemProps = {
  id: string;
  name: string;
}

interface CategoryProps{
  categoryList: ItemProps[];
}

export default function Product({categoryList}: CategoryProps) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [avatarUrlPreview, setAvatarUrlPreview] = useState('');
  const [imageAvatar, setImageAvatar] = useState<any | null>(null);

  const [categories, setCategories] = useState(categoryList || [])
  const [categorySelected, setCategorySelected] = useState(0)

  function handleFile(e: ChangeEvent<HTMLInputElement>) {

    if(!e.target.files){
      return;
    }
    
    const image = e.target.files[0];

    if(!image){
      return;
    }

    if(image.type === 'image/jpeg' || image.type === 'image/png'){
      
      setImageAvatar(image);
      setAvatarUrlPreview(URL.createObjectURL(e.target.files[0]))
    }
  }

  function handleChangeCategory(e: ChangeEvent<HTMLSelectElement>){
    setCategorySelected(e.target.selectedIndex);
  }

  async function handleRegister(event: FormEvent){
    event.preventDefault()

    try{
     const data = new FormData()

     data.append('name', name);
     data.append('price', price);
     data.append('description', description);
     data.append('category_id', categories[categorySelected].id);
     data.append('file', imageAvatar);

     const apiClient = setupAPIClient()

     await apiClient.post('/product', data)

     toast.success('Produto Cadastrado Com Sucesso')

    }catch(err){
      console.log(err)
      toast.error('Ops!, Erro Ao Cadastrar')
    }

    setName('')
    setPrice('')
    setDescription('')
    setImageAvatar(null)
    setAvatarUrlPreview('')
  }

  return (
    <>
      <Head>
        <title>Novo Produto - Pizzaria System</title>
      </Head>

      <Header />
      <S.Container>
        <S.RegistrationProductText>Novo Produto</S.RegistrationProductText>

        <S.FormProduct onSubmit={handleRegister}>

          <S.LabelAvatar>

            <S.SpanIcon>
              <FiUpload size={32} color="#fff"/>
            </S.SpanIcon>

            <S.InputUpload 
              type="file" 
              accept="image/png, image/jpeg"
              onChange={handleFile}
            >

            </S.InputUpload>

            {avatarUrlPreview && (

              <S.ProductImage
                  src={avatarUrlPreview}
                  alt="Foto Do Produto"
                  width={240}
                  height={240}
                >
              </S.ProductImage>
              
            )}
          </S.LabelAvatar>

          <S.SelectedProduct value={categorySelected} onChange={handleChangeCategory}>
            {categories.map((item, index) => {
              return(
                <S.OptionProduct key={item.id} value={index}>
                  {item.name}
                </S.OptionProduct>
              )
            })}

          </S.SelectedProduct>

          <Input
            type="text"
            placeholder='Digite O Nome Do Produto'
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
          </Input>

          <Input
            type="text"
            placeholder='Preço Do Produto'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
          </Input>

          <S.TextArea 
          placeholder='Descreva Seu Produto...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          >
          </S.TextArea>

          <Button type='submit' text='Cadastrar' />
        </S.FormProduct>
      </S.Container>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)

  const response = await apiClient.get('/category');

  return {
    props: {
      categoryList: response.data
    }
  }
})