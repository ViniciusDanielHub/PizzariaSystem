import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../../../public/img/LogoPizzariaSystem.svg'

import { FiLogOut } from 'react-icons/fi';

import * as S from './styles'
import { useContext } from 'react';
import { AuthContext } from 'context/auth/authContext';

export const Header = () => {
  const { signOut } = useContext(AuthContext);

  return (
      <S.HeaderContainer>

          <S.HeaderContent>
            <Link href='/dasboard'>
          <Image src={logoImg} alt="Pizzaria System Logo" />
        </Link>

        <S.NavOption>
          <Link href='/category'>
            <S.TextOption>
              Categoria
            </S.TextOption>
          </Link>

          <Link href='/product'>
            <S.TextOption>
              Cardápio
            </S.TextOption>
          </Link>

          <S.Button onClick={signOut}>
            <FiLogOut color='#fff' size={24} />
          </S.Button>
        </S.NavOption>
        </S.HeaderContent>
    </S.HeaderContainer>
  )
}