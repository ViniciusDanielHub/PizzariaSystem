import styled, { css, DefaultTheme } from 'styled-components'

export const ContainerCenter = styled.div`
  ${({ theme }) => css`
     min-height: 100vh;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
  `}
`

export const CreateAccountText = styled.h1`
  ${({ theme }) => css`
     margin:${theme.spacings.xsmall} 0 ${theme.spacings.xsmall} 0 ;
     font-size:${theme.font.sizes.xxlarge};
     font-family: 'Poppins';
     font-weight: ${theme.font.bold};
     color: ${theme.colors.lightGray};
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
       display: flex;
       flex-direction: column;
       width: 90%;
       margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const FormLogin = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  margin-top: ${theme.spacings.small};
  `}
`

export const NotAccountText = styled.text`
  ${({ theme }) => css`
  margin-top: ${theme.spacings.xsmall};
  color: ${theme.colors.lightGray};
  cursor: pointer;
  `}
`
