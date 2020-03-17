import React from 'react';

const ShowJobs = props => {
    return (
        <>
        <p>Here are the jobs you applied to:</p>
        <ul className='jobList'>
            {props.jobs.map(job => {
                return (
                    <div className='jobItems'>
                        <li key={job.id}>Name: {job.name}</li>
                        <p>City: {job.city}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                )
            })}
            </ul>
        </>
    )
}

export default ShowJobs;