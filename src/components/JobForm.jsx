import React from 'react';
import useInput from './customHook'

const TodoForm = props => {
    const [newJob, setNewJob, handleInputChange] = useInput('');

    const submitNewJob= (e) => {
        e.preventDefault()
        props.saveNewJob(newJob)
    }
    return (
        <div className='jobForm'>
            <form onSubmit={submitNewJob}>
                <input type="text" 
                    placeholder="Create Job Application"
                    onChange={handleInputChange}
                    value={newJob}
                    ></input>
                <button>Add Application</button>
            </form>
        </div>
    )
}

export default TodoForm;