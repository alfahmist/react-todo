import React from 'react'
import {withTheme} from '@emotion/react'
import PropTypes from "prop-types";
import styled from '@emotion/styled'

import Container from '../../layout/Container';

import Todo from '../todo/TodoClass';


const StyledTodoPlaceholderText = styled.div `
  font-family: "Homemade Apple", sans-serif;
  font-size: 24px;
  text-align: center;
  padding: 16px;
`

const StyledaddButtonPlaceholderText = styled.span `
font-family: "Bungee", sans-serif;
font-size: 24px;
`
class Todos extends React.Component {
  render() {
    const {todos, completeTodo, theme} = this.props;
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
  
          <StyledTodoPlaceholderText theme={theme}>
             {[
               "Add todo by clicking ",
               <StyledaddButtonPlaceholderText>
                 Add
               </StyledaddButtonPlaceholderText>,
               " button on the top of left corner"
             ]}
          </StyledTodoPlaceholderText>
 
            // <div css={styles.todoPlaceholderText}>
          //   Add Todo by clicking {"  "}<span css={styles.addButtonPlaceholderText}> Add </span> Button
          // </div>
        )}
      </Container>
    </section>
    )
  }
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      isCompleted : PropTypes.bool
      
    })
    ),
    completeTodo: PropTypes.func.isRequired
  
  };
  
}

export default withTheme(Todos);