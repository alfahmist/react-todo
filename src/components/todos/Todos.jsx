// import React from 'react';

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

import Todo from '../todo/TodoClass';
import PropTypes from 'prop-types';

// import styles from './todos.module.css'

import Container from '../../layout/Container';
import * as styles from './todos.styles';

const Todos = ({todos, completeTodo}) => {

  return (
    <section className="todos-component">
      <Container flexDirection='column' minHeight='500px'>
        {todos.length > 0 &&
            todos.map((todo, index)=>{
              return <Todo 
              key={index} 
              text={todo.text} 
              completeTodo={completeTodo} 
              isCompleted={todo.isCompleted}
              index={index}/>
        })}
        {todos.length === 0 && (
          <div css={styles.todoPlaceholderText}>
            Add Todo by clicking {"  "}<span css={styles.addButtonPlaceholderText}> Add </span> Button
          </div>
        )}
      </Container>
    </section>
  )
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
   
  })
  ),
  completeTodo: PropTypes.func.isRequired

};

export default Todos;