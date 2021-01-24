import {css} from '@emotion/react'

export const paper = ({theme}) => {
  return css `
  width: 600px;
  min-height: 800px;

  background-color: ${theme.background.color.primary};
  border-radius: 4px;

  padding: 32px;
  
  `
}
export const frame = ({theme}) => {
  return css `
  border: 1px solid ${theme.color.primary.black};
  // height: 100%;
  // justify-content: space-between;
  // display: flex;
  // flex-direction: column;
  
  `
}