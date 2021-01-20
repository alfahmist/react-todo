import React from 'react';
import Todo from '../todo/Todo'
import PropTypes from 'prop-types';

import styles from './todos.module.css'
const Todos = ({todos, completeTodo}) => {

  return (
    <section className={styles.todos}>
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
       <div className={styles.TodoPlaceholderText}>
         Add Todo by clicking {"  "}<span className={styles.addButtonPlaceholderText}> Add </span> Button
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