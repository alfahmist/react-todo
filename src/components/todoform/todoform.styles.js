import {css} from '@emotion/react'

export const add = () => {
  return css `
  padding: 16px;
  `
}

export const addBtn = ({theme}) => {
return css`
font-size: 1.8rem;
font-family: "Bungee", sans-serif;

padding-right: unset;
cursor: pointer;

background: unset;
border: unset;
outline: unset;
&:active {
  text-shadow: 1px 1px 2px ${theme.color.primary.black}  ;
}
`
}

export const addForm = () => {
  return css`
  display: flex;
  align-items: flex-start;
  `
}

export const addInput = ({theme}) =>{
  return css`
  background: unset;
  border: unset;
  padding: 0 64px;
  padding-bottom: 16px;
  flex: 1;

  border-bottom: 1px solid ${theme.color.primary.red};
  outline: unset;

  font-family: "Homemade Apple", sans-serif;
  font-size: 16px;
  text-transform: lowercase;
  `
}