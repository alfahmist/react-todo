import React, {useState} from 'react';
import '../App.css';

import Header from '../components/header/Header';
import Paper from '../components/paper/Paper';
import TodoForm from '../components/todoform/TodoForm';
import Todos from '../components/todos/Todos'

import Container from '../layout/Container';

const TodoList = () => {
  const [todos, setTodos] = useState([
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
  ]);

  const [showAdd,setShowAdd] = useState(false);

  const addTodo = value => {
    const addedTodo = [...todos, {text: value, isCompleted: false}];
    
    if(todos.length<=9) {
      setTodos(addedTodo);

    } else {
      alert("reach maximum todo")
    }
    
  }

  const completeTodo = (index) => {
      const addedTodo = [...todos];
      addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

      setTodos(addedTodo);
  }

  const clearTodos = () => !showAdd && setTodos([]);

  const showAddToggle = () => setShowAdd(!showAdd);
  console.log("todos", todos.length);

  return (
    <Paper>
      <Container flexDirection='column'justifyContent='space-between' height='100%'>
        <Header showAddToggle={showAddToggle} showAdd={showAdd} clearTodos={clearTodos}/>
        <TodoForm addTodo={addTodo} showAdd={showAdd}/>
        <Todos todos = {todos} completeTodo={completeTodo}/>
      </Container>
    </Paper>
  );
}

export default TodoList;
