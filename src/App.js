import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
    <div class="frame">
      <section class="header">
        <button class="header-btn main-black-color">Add</button>
        <h1 class="header-title">Todo List</h1>
        <button class="header-btn main-red-color">Clear</button>
      </section>

      <section class="add">
        <form class="add-form">
          <input type="text" class="add-input "/>
          <button class="add-btn main-black-color">Add</button>
        </form>
      </section>

      <section class="todos">
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
      </section>
      
    </div>
  </div>
  );
}

export default App;
