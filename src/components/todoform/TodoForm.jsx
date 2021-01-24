/** @jsxImportSource @emotion/react */
import { jsx, useTheme } from '@emotion/react'

import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../layout/Container';
import Item from '../../layout/Item';

import Button from '../button/Button';

// import styles from './todoform.module.css'

import * as styles from './todoform.styles';
const TodoForm = ({addTodo, showAdd}) => {
  const [value , setValue] = React.useState("");
  const theme = useTheme();

  const handleFormSubmit = e => {
    e.preventDefault();
  
  
    if(!value) {
      alert("No Blank Todo!")
      return
    }

    if(value.length > 40 ) {
      alert("Please Create a shorter todo text");
      setValue("");
      return;
    }
    addTodo(value);
    setValue("");
  }
  if(showAdd){
    return (
      <section className="todoform-component">
        <form css={styles.addForm} onSubmit={handleFormSubmit}>
          <Container alignItems='flex-start'>
            <Item flex='1'>
              <input type="text" 
              css={styles.addInput({theme})} 
              value={value} 
              onChange={e => setValue(e.target.value)}/>
            </Item>
            <Item margin='0 20px 0 0'>
              <Button text='ADD'/>
            </Item>
          </Container>
        </form>
      </section>
    );
  } else {
    return null;
  }
}
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
}



export default TodoForm;