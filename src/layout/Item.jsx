// import React from 'react';

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
 
import PropTypes from 'prop-types'

const Item = ({children, flex, align, padding, margin}) => {
  return (
    <div className="flex-item" css={
      css`
        flex : ${flex}; 
        text-align: ${align};
        padding : ${padding};
        margin : ${margin};
      `
    }>
      {children}
    </div>
  )
}

Item.defaultProps = {
  align : 'left',  
  padding : 'unset',
  margin : 'unset'
}

Item.propTypes = {
  children : PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flex : PropTypes.oneOfType([
    PropTypes.number, PropTypes.string
  ]),
  align : PropTypes.oneOf(['center','left','right','justify']),
  padding: PropTypes.string,
  margin: PropTypes.string
}

export default Item;