// import React from 'react';

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

import Todo from '../todo/Todo'
import PropTypes from 'prop-types';

// import styles from './todos.module.css'

import * as styles from './todos.styles';
const Todos = ({todos, completeTodo}) => {

  return (
    <section css={styles.todos}>
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