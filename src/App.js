import React, { useState } from 'react';

import './css/index.scss';
import TodoForm from './components/TodoForm.jsx';
import ShowTodos from './components/ShowTodos.jsx';

function App() {

  const [todo, setTodo] = useState([])

  const saveNewTodo = value => {
    setTodo(
    [...todo,{
      id: Date.now(),
      name: value,
      completed: false

    }])
  }
  return (
    <div className="App">
      <h1>Add A Todo Below</h1>
      <TodoForm saveNewTodo={saveNewTodo} />
      <ShowTodos todos={todo}/>
    </div>
  );
}

export default App;
