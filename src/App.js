import React, { useState } from 'react';

import './css/index.scss';
import TodoForm from './components/TodoForm';
import ShowTodos from './components/ShowTodos';

function App() {

  const [todo, setTodo] = useState([{
      id: Date.now(),
      name: '',
      completed: false

  }]
  )

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
