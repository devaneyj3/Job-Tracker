import React from 'react';
import useInput from './customHook'

const TodoForm = props => {
    const [newTodo, setNewTodo, handleInputChange] = useInput('');

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