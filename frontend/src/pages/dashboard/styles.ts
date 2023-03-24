import styled, { css, DefaultTheme } from 'styled-components'

export const ContainerCenter = styled.div`
  ${({ theme }) => css`
     max-width: 496px;
     margin: ${theme.spacings.huge} auto;
     padding: 0 ${theme.spacings.small};
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
    color: ${theme.colors.white};
  `}
`

export const ButtonRefresh = styled.button`
  ${({ theme }) => css`
      background: transparent;
      border: 0;
      margin-left: ${theme.spacings.xsmall};
      cursor: pointer;
  `}
`

export const ListOrders = styled.article`
  ${({ theme }) => css`
     display: flex;
     flex-direction: column;
     margin: ${theme.spacings.xsmall} 0;
  `}
`

export const OrderItem = styled.section`
  ${({ theme }) => css`
     display: flex;
     flex-direction: row;
     background-color: ${theme.colors.darkGray};
     margin-bottom: ${theme.spacings.small};
     align-items: center;
     border-radius: ${theme.border.radius};
  `}
`

export const ButtonOrderItem = styled.button`
  ${({ theme }) => css`
     cursor: pointer;
     border: 0;
     background: transparent;
     font-size: ${theme.font.sizes.xsmall};
     color: ${theme.colors.white};
     height: ${theme.font.sizes.huge};
     align-items: center;
     display: flex;
  `}
`

export const Tag = styled.div`
  ${({ theme }) => css`
  width: ${theme.spacings.xxsmall};
  background-color: ${theme.colors.secondary};
  height: ${theme.font.sizes.huge};
  border-radius: ${theme.border.basicRadius} 0 0 ${theme.border.basicRadius};
  margin-right: ${theme.spacings.xsmall};
  `}
`

export const NameTable = styled.span`
  ${({ theme }) => css`
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family};
  `}
`

export const EmptyListText = styled.span`
  ${({ theme }) => css`
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family};
      color: ${theme.colors.gray}
  `}
`

