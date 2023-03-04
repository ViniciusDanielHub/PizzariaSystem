import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

import * as S from './styles'

export function Input({...rest} : InputProps) {
  return(
    <S.Input type="text" {...rest}/>
  )
}