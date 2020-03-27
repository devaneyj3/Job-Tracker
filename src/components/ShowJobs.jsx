import React, { useContext } from 'react';
import { JobsContext } from '../context/Jobs';

const ShowJobs = () => {

    const JobContext = useContext(JobsContext);
    console.log(JobContext)
    return (
        <>
        <p>Here are the jobs you applied to:</p>
        <ul className='jobList'>
            {JobContext.jobs.map(job => {
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