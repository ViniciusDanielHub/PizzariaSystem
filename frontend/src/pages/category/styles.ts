import styled, { css, DefaultTheme } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
     max-width: 496px;
     margin: 8rem auto;
     padding: 0 2rem;

     display: flex;
     flex-direction: column;
  `}
`

export const RegistrationText = styled.h1`
  ${({ theme }) => css`
     color: #fff;
`}
`

export const FormCategory = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`}
`

export const Input = styled.input`
  ${({ theme }) => css`
      max-width: 600px;
    background-color: ${theme.colors.darkGray};
    border: 0;
    padding: 1rem;
    height: 40px;
    border-radius: 0.3rem;
    color: #fff;
    border: 1px solid ${theme.colors.lightGray}
    margin-bottom:1rem;
`}
`