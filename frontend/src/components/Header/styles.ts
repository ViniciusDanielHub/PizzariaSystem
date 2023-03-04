import styled, { css, DefaultTheme } from 'styled-components'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
     margin-top: 24px;
     height: 5rem;
  `}
`

export const HeaderContent = styled.div`
  ${({ theme }) => css`
     max-width: 1120px;
     height: 5rem;
     margin: 0 auto;
     padding: 0 2rem;

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
    color: #fff;
    padding: 0 0.5rem;
    display: inline-block;
    position: relative;
    transition: color 0.7s;

    & + p {
      margin-left: 2rem;
    }

    &:hover{
      color: #fff;
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    margin-left: 2rem;
    background: transparent;
    border: 0;
    transition: transform 0.8s;
    cursor: pointer;

    &:hover{
      transform: scale()(1.2);
    }
  `}
`