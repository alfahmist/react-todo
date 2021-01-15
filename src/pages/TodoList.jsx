import React, {useState} from 'react';
import '../App.css';

import Header from '../components/Header';
import Paper from '../components/Paper';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos'

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text:"Belajar React!"
    },
    {
      text:"Belajar Props!"
    },
    {
      text:"Belajar Hooks!"
    }
  ]);

  const [showAdd,setShowAdd] = useState(false);

  const addTodo = value => {
    const addedTodo = [...todos, {text: value}];
    
    setTodos(addedTodo);
  
  }

  const showaddToggle = () => setShowAdd(!showAdd);


  return (
    <Paper>
      <Header showaddToggle={showaddToggle}/>
      <TodoForm addTodo={addTodo} showAdd={showAdd}/>
      <Todos todos = {todos}/>
    </Paper>
  );
}

export default TodoList;
