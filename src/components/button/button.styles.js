import {css} from '@emotion/react'
export const button =  ({color, align}) => {
  let textColor;


  switch(color) {
    case "black":
      textColor = '#484848';
      break;
    case "red":
      textColor = '#e06262';
      break;
    default:
      textColor = '#484848';
  }

  return css`
  /* width: 24%; */
  font-size: 1.8rem;
  font-family: "bungee", sans-serif;
  color: ${textColor};

  // padding: 16px;
  cursor: pointer;
  
  background: unset;
  border: unset;
  outline: unset;
  text-align: ${align};
  `
}