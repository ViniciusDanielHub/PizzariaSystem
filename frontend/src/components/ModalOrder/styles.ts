import styled, { css, DefaultTheme } from 'styled-components'

export const ContainerModal = styled.div`
  ${({ theme }) => css`
  width: 440px;
  color: ${theme.colors.white};
  border-radius: 1rem;
  `}
`

export const TitleOrderModal = styled.h2`
  ${({ theme }) => css`
  margin: 1rem 0;
  `}
`

export const Table = styled.span`
  ${({ theme }) => css`
  font-size: 2rem;
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
    margin: 1rem 0;
  `}
`

export const AmountItem = styled.span`
  ${({ theme }) => css`
  `}
`

export const Description = styled.span`
  ${({ theme }) => css`
    margin-top: 0.5rem;
    word-break: break-all;
  `}
`

export const ButtonOrder = styled.button`
  ${({ theme }) => css`
    margin-top: 1.5rem;
    background-color: rgba(0,0,0, 40%);
    border: 0;
    cursor: pointer;
    padding: 1rem 1.2rem;
    border-radius: 0.8rem;
    color: ${theme.colors.secondary}
  `}
`