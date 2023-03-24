import styled, { css, DefaultTheme } from 'styled-components'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
     margin-top: ${theme.spacings.medium};
     height: ${theme.font.sizes.xxxlarge};
  `}
`

export const HeaderContent = styled.div`
  ${({ theme }) => css`
     max-width: 1120px;
     height: ${theme.font.sizes.xxxlarge};
     margin: 0 auto;
     padding: 0 ${theme.spacings.small};
     display: flex;
     justify-content: space-between;
     align-items: center;
  `}
`

export const NavOption = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
  `}
`

export const TextOption = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xxsmall};
    display: inline-block;
    position: relative;
    transition: color 0.7s;

    & + p {
      margin-left: ${theme.spacings.small};
    }

    &:hover{
      color: ${theme.colors.white};
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
    background: transparent;
    border: 0;
    transition: transform 0.8s;
    cursor: pointer;

    &:hover{
      transform: scale()(1.2);
    }
  `}
`
