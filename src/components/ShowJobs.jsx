import React from 'react';

const ShowTodos = props => {
    return (
        <>
        <ul className='jobList'>
            {props.jobs.map(job => {
                return (
                    <div className='jobItems'>
                        <li key={job.id}>{job.name}</li>
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