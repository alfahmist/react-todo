import React from 'react';
import '../App.css';

import Header from '../components/Header';
import Paper from '../components/Paper';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos'

const TodoList = () => {
  return (
    <Paper>
      <Header/>
      <TodoForm/>
      <Todos/>
    </Paper>
  );
}

export default TodoList;
