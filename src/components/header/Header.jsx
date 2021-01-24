// import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types';

import Button from '../button/Button';
import Container from '../../layout/Container';
import Item from '../../layout/Item';

// import styles from './header.module.css'
// import cx from 'classnames'

import * as styles from './header.styles';

const Header = ({showAddToggle, showAdd, clearTodos}) => {

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
      <Button 
        text={showAdd ? 'Finish' : 'Add'}
        onClick={showAddToggle}
        color='black'
      />
      </Item>
      <Item flex={2}>
      <h1 css={styles.headerTitle}>Todo List</h1>
      </Item>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>Clear</button> */}
      <Item flex={1} align="right">
      <Button 
        text='clear'
        onClick={clearTodos}
        color='red'
        align='right'
      />
      </Item>
      </Container>
  
     
    </section>
  )
}

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
}
export default Header;