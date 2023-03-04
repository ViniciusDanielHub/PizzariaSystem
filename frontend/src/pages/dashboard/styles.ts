import styled, { css, DefaultTheme } from 'styled-components'

export const ContainerCenter = styled.div`
  ${({ theme }) => css`
     max-width: 496px;
     margin: 8rem auto;
     padding: 0 2rem;

     display: flex;
     flex-direction: column;
  `}
`

export const OrderHeader = styled.div`
  ${({ theme }) => css`
      display: flex;
      flex-direction: row;
  `}
`

export const TitleOrder = styled.h1`
  ${({ theme }) => css`
    color: #fff;
  `}
`

export const ButtonRefresh = styled.button`
  ${({ theme }) => css`
      background: transparent;
      border: 0;
      margin-left: 1rem;
      cursor: pointer;
  `}
`

export const ListOrders = styled.article`
  ${({ theme }) => css`
     display: flex;
     flex-direction: column;
     margin: 1rem 0;
  `}
`

export const OrderItem = styled.section`
  ${({ theme }) => css`
     display: flex;
     flex-direction: row;
     background-color: ${theme.colors.darkGray};
     margin-bottom: 2rem;
     align-items: center;
     border-radius: 0.8rem;
  `}
`

export const ButtonOrderItem = styled.button`
  ${({ theme }) => css`
     cursor: pointer;
     border: 0;
     background: transparent;
     font-size: 1.2rem;
     color: #fff;
     height: 60px;
     align-items: center;
     display: flex;
  `}
`

export const Tag = styled.div`
  ${({ theme }) => css`
  width: 8px;
  background-color: ${theme.colors.secondary};
  height: 60px;
  border-radius: 0.3rem 0 0 0.3rem;
  margin-right: 1rem;
  `}
`

export const NameTable = styled.span`
  ${({ theme }) => css`
      font-size: ${theme.font.sizes.small};
      font-family: 'Poppins';
  `}
`

export const EmptyListText = styled.span`
  ${({ theme }) => css`
      font-size: ${theme.font.sizes.small};
      font-family: 'Poppins';
      color: ${theme.colors.gray}
  `}
`

