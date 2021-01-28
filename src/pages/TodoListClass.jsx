import React from 'react'

import Header from '../components/header/HeaderClass';
import Paper from '../components/paper/PaperClass';
import TodoForm from '../components/todoform/TodoFormClass';
import Todos from '../components/todos/TodosClass'

import Container from '../layout/Container';

import useStateWithLocalStorage from '../hooks/useStateWithLocalStorage';

class TodoList extends React.Component {
  
  state = {
      todos: [
        {
          text:"Belajar React!",
          isCompleted:false
        },
        {
          text:"Belajar Props!",
          isCompleted:false
        },
        {
          text:"Belajar Hooks!",
          isCompleted:false
        }
      ],
      showAdd: false,
  }
  addTodo = value => {
    const {todos} = this.state;
    if(todos.length < 10) {
      const addedTodo = [
        ...todos, 
        {text: value, isCompleted : false}
      ];

      this.setState({
        todos : addedTodo
      })
    } else {
      alert("Only 10 todos is allowed!");
    }
    
  }

  completeTodo = index => {
    const addedTodo = [...this.state.todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted 
    
    this.setState({
      todos: addedTodo
    })
  
  }

  clearTodos = ()=> {
    if(this.state.showAdd){
      alert("Finish add todo before clear");
      return;
    }

    this.setState({
      todos : []
    })
  }
  
  showAddToggle = () => {
    this.setState(
    prevState => ({ showAdd: !prevState.showAdd})
  )}
render(){
  const {todos, showAdd} = this.state;
  return(
    <Paper>
    <Container flexDirection='column' justifyContent='space-between' height='100%'>
      <Header showAddToggle={this.showAddToggle} showAdd={showAdd} clearTodos={this.clearTodos}/>
      <TodoForm addTodo={this.addTodo} showAdd={showAdd}/>
      <Todos todos = {todos} completeTodo={this.completeTodo}/>
    </Container>
  </Paper>
  )
}

}

export default TodoList;