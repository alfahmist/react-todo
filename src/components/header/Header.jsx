// import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types';

import Button from '../button/Button'

// import styles from './header.module.css'
// import cx from 'classnames'

import * as styles from './header.styles';

const Header = ({showAddToggle, showAdd, clearTodos}) => {

  return (
    <section css={styles.header}>
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? 'Finish' : 'Add'}
      </button> */}
      <Button 
        text={showAdd ? 'Finish' : 'Add'}
        onClick={showAddToggle}
        color='black'
      />
      <h1 css={styles.headerTitle}>Todo List</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>Clear</button> */}
      <Button 
        text='clear'
        onClick={clearTodos}
        color='red'
        align='right'
      />
    </section>
  )
}

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
}
export default Header;