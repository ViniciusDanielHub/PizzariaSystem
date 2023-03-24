import styled, { css, DefaultTheme } from 'styled-components'

export const ContainerModal = styled.div`
  ${({ theme }) => css`
  width: 440px;
  color: ${theme.colors.white};
  border-radius: ${theme.border.hugeBorder};
  `}
`

export const TitleOrderModal = styled.h2`
  ${({ theme }) => css`
  margin: ${theme.spacings.xxsmall} 0;
  `}
`

export const Table = styled.span`
  ${({ theme }) => css`
  font-size: ${theme.font.sizes.xlarge};
  `}
`

export const ButtonModal = styled.button`
  ${({ theme }) => css`
     background: transparent;
     border: 0;
  `}
`

export const ContainerItem = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const AmountItem = styled.span`
  ${({ theme }) => css`
  `}
`

export const Description = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    word-break: break-all;
  `}
`

export const ButtonOrder = styled.button`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    background-color: rgba(0,0,0, 40%);
    border: 0;
    cursor: pointer;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.secondary}
  `}
`
