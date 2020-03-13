import React, { useState } from 'react';

const TodoForm = props => {
    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    }
    const submitNewTodo = (e) => {
        e.preventDefault()
        props.saveNewTodo(newTodo)
    }
    return (
        <div className='todoForm'>
            <form onSubmit={submitNewTodo}>
                <input type="text" 
                    placeholder="Create Item"
                    onChange={handleInputChange}
                    value={newTodo}
                    ></input>
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm;