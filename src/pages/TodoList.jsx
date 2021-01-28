import React, {useState} from 'react';
import '../App.css';

import useStateWithLocalStorage from '../hooks/useStateWithLocalStorage';

import Header from '../components/header/HeaderClass';
import Paper from '../components/paper/PaperClass';
import TodoForm from '../components/todoform/TodoFormClass';
import Todos from '../components/todos/TodosClass'

import Container from '../layout/Container';

const TodoList = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     text:"Belajar React!",
  //     isCompleted:false
  //   },
  //   {
  //     text:"Belajar Props!",
  //     isCompleted:false
  //   },
  //   {
  //     text:"Belajar Hooks!",
  //     isCompleted:false
  //   }
  // ]);


  // const [todos, setTodos] = useState(
  //   JSON.parse(localStorage.getItem('todos')) || []
  // );

  const [todos, setTodos] = useStateWithLocalStorage("todos")

  const [showAdd,setShowAdd] = useState(false);

  // useEffect(()=> {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos])
  
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

  const clearTodos = () => {
    if(showAdd){
      alert("Finish add todo before clear");
      return;
    }
    !showAdd && setTodos([]);
  }
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
