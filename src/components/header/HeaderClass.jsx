import React from 'react'
import {withTheme} from '@emotion/react'
import PropTypes from 'prop-types';

import styled from '@emotion/styled'

import Button from '../button/ButtonClass';
import Container from '../../layout/Container';
import Item from '../../layout/Item';

const StyledH1 = styled.h1 `

text-align: center;
color: ${props=> props.theme.color.primary.black};
font-size: 2.8rem;
font-family: "Homemade Apple", sans-serif;
text-transform: lowercase;

`

class Header extends React.Component {
  
  render() {
    const {showAddToggle, showAdd, clearTodos, theme} = this.props;
    
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
      <StyledH1 theme={theme}>Todo List</StyledH1>
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

  static propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired
  }

}

export default withTheme(Header);