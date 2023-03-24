import styled, { css, DefaultTheme } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
     max-width: 496px;
     margin: ${theme.spacings.huge} auto;
     padding: 0 ${theme.spacings.xsmall};
     display: flex;
     flex-direction: column;
  `}
`

export const RegistrationText = styled.h1`
  ${({ theme }) => css`
     color:${theme.colors.white};
`}
`

export const FormCategory = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacings.xsmall} 0;
`}
`

export const Input = styled.input`
  ${({ theme }) => css`
    max-width: 600px;
    background-color: ${theme.colors.darkGray};
    border: 0;
    padding: ${theme.spacings.xsmall};
    height: ${theme.font.sizes.xxxlarge};
    border-radius: ${theme.border.basicRadius};
    color:${theme.colors.white};
    border: 1px solid ${theme.colors.lightGray};
    margin-bottom:${theme.spacings.xsmall};
`}
`
