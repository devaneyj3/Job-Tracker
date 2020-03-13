import React from 'react';

const ShowTodos = props => {
    return (
        <>
        <ul className='todoList'>
            {props.todos.map(todo => {
                return (
                    <div className='todoItems'>
                        <li key={todo.id}>{todo.name}</li>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                )
            })}
            </ul>
        </>
    )
}

export default ShowTodos;