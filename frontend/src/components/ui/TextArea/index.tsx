import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

import * as S from './styles'

export function TextArea({ ...rest }: TextAreaProps) {
  return (
    <S.TextArea {...rest} />
  )
}