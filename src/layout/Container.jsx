// import React from 'react';

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
 
import PropTypes from 'prop-types'

const Container = ({children, flexDirection, flexWrap, justifyContent, alignItems, alignContent}) => {

  const containerstyles = css `
    display : flex;
    flex-direction : ${flexDirection};
    flex-wrap : ${flexWrap};
    justify-content : ${justifyContent};
    align-items : ${alignItems};
    align-content : ${alignContent};

  `
  return (
    <div className="flex-container" css={containerstyles}>{children}</div>
  )
}

Container.defaultProps = {
  flexDirection : 'row',
  flexWrap : 'nowrap',
  justifyContent : 'flex-start',
  alignItems : 'stretch',
  alignContent : 'stretch'
}

Container.propTypes =  {
  children : PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  flexWrap : PropTypes.oneOf([
    'nowrap',
    'wrap',
    'wrap-reverse',
  ]),
  justifyContent : PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'start',
    'end',
    'left',
    'right',
  ]),
  alignItems : PropTypes.oneOf([
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
  ]),
  alignContent : PropTypes.oneOf([
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
  ])
}

export default Container;