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

export const RegistrationProductText = styled.h1`
  ${({ theme }) => css`
     color: ${theme.colors.white};
`}
`

export const FormProduct = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacings.xsmall} 0;
`}
`

export const SelectedProduct = styled.select`
  ${({ theme }) => css`
  width: 100%;
  height: ${theme.font.sizes.xxxlarge};
  border-radius: ${theme.border.basicRadius};
  margin-bottom: ${theme.spacings.xxsmall};
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkGray};
  border: 1px solid ${theme.colors.gray};
  padding: 0 ${theme.spacings.xxsmall};
`}
`

export const OptionProduct = styled.option`
  ${({ theme }) => css`
`}
`

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    max-width: 600px;
    min-height: 124px;
    background-color: ${theme.colors.darkGray};
    border: 0;
    padding: ${theme.spacings.xsmall};
    height: ${theme.font.sizes.xxxlarge};
    border-radius: ${theme.border.basicRadius};
    color: ${theme.colors.white};
    margin-bottom:${theme.spacings.xxsmall};
`}
`

export const LabelAvatar = styled.label`
  ${({ theme }) => css`
  width: 100%;
  height: 224px;
  background-color: ${theme.colors.darkGray};
  margin-bottom: ${theme.spacings.xxsmall};
  border-radius: ${theme.border.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`}
`

export const SpanIcon = styled.span`
  ${({ theme }) => css`
  z-index:1;
  position: absolute;
  opacity: 0.7;
  transition: all 0.7s;

  &:hover{
    opacity: 1;
    transform: scale(1.2);
  }
`}
`

export const InputUpload = styled.input`
  ${({ theme }) => css`
  display: none;
`}
`

export const ProductImage = styled.img`
  ${({ theme }) => css`
   z-index: 2;
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: ${theme.border.radius};
`}
`
