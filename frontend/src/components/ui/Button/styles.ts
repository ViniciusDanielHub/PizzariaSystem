import styled, { css, DefaultTheme, keyframes } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    max-width: 600px;
    padding: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.red};
    border: 0;
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    transition: filter 0.2s;

    &[disabled]{
      cursor: not-allowed;
      svg{
        animation: animate 2s infinite;
      }
    }

    :hover{
      filter: brightness(1.08)
    }

    @keyframes animate{
      from{
        transform: rotate(0deg);
      }
      to{
         transform: rotate(360deg);
      }
    }
   
  `}
`
export const ButtonText = styled.a`
  ${({ theme }) => css`
     font-size:${theme.font.sizes.medium};
     font-family: ${theme.font.family};
     font-weight: ${theme.font.bold};
     color: ${theme.colors.lightGray};
  `}
`
