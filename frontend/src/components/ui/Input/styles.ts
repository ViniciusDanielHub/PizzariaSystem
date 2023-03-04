import styled, { css, DefaultTheme } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
     height: ${theme.spacings.small};
     margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.small} 0;
     border: 0;
     border-radius: ${theme.border.radius};
     background-color: ${theme.colors.mainBg};
     color: ${theme.colors.white};
     padding: ${theme.spacings.xsmall};
     border: 3px solid ${theme.colors.darkGray};
     font-family: 'Poppins';
  `}
`