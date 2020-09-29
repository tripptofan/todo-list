import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoItem from './Components/TodoItem';


function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');


  const toggleCompleted = id => {
    let currentTodos = todos
    currentTodos = currentTodos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }else {
        return todo
      }
    })
    setTodos(currentTodos)
  };

  const removeTodo = todo => {
    setTodos(todos.filter(item => item.id !== todo))
  }


  return (
<div id='app'>
<header>
  <h1>My Todo List</h1>

  <div id='formContainer'>
  <form id='addTodo' onSubmit={e => {e.preventDefault(); setTodos(oldState => [...oldState, {task: todoInput, completed: false, creationDate: new Date(), id: uuidv4() }]); setTodoInput('')}}>
    <input type='text' onChange={e => setTodoInput(e.target.value)} value={todoInput} placeholder='Enter new item (50 char. max)' required maxLength='50' />
    <button type='submit'>Submit</button>
  </form>
  
</div>
</header>


<div id='todoContainer'>
  {todos.map(item => <TodoItem todoItem={item} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />)}
</div>

<footer>
  <p>Created by Jason Tripp</p>
<a href='https://github.com/tripptofan/todo-list'>github</a>

</footer>
</div>
  );
}

export default App;
