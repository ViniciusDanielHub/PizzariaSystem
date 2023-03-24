import styled, { css, DefaultTheme } from 'styled-components'

export const TextArea = styled.textarea`
  ${({ theme }) => css`
     width: ${theme.font.sizes.xlarge};
     height: ${theme.spacings.small};
     margin-bottom: ${theme.spacings.xsmall};
     border: 0;
     border-radius: ${theme.border.radius};
     background-color: ${theme.colors.mainBg};
     color: ${theme.colors.white};
     padding: ${theme.spacings.xsmall};
     border: ${theme.border.hugeBorder} solid ${theme.colors.darkGray}
  `}
`
