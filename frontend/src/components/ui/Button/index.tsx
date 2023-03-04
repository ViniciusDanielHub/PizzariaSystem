import { ReactNode, ButtonHTMLAttributes } from 'react'

import {FaSpinner} from 'react-icons/fa'

import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  loading?: boolean,
  text: string
}

export function Button({loading, text, ...rest}: ButtonProps) {
  return (
    <S.Button
    disabled={loading}
    {...rest}
    >
      {loading ? (
        <FaSpinner color='#fff' size={16}/>
      ): (
          <S.ButtonText>{text}</S.ButtonText>
      )}
    </S.Button>
  )
}