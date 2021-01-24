import {css} from '@emotion/react'
export const header = () => {
  return css `
  display: flex;
  align-items: flex-start;
  `
}

export const headerTitle = () =>{
  return css `
  /*width : 52%;*/
  text-align: center;
  color: var(--main-black-color);

  font-size: 3.6rem;
  font-family: "Homemade Apple", sans-serif;
  text-transform: lowercase;
  `
}