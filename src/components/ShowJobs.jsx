import React, { useContext } from 'react';
import { JobsContext } from '../context/Jobs';

const ShowJobs = () => {

    const JobContext = useContext(JobsContext);
    return (
        <>
        <p>Here are the jobs you applied to:</p>
        <div className='jobList'>
            {JobContext.jobs.map(job => {
                return (
                    <div className='jobItems'>
                        <div key={job.id}>Company: {job.name}</div>
                        <p>City: {job.city}</p>
                        <button>Edit</button>
                        <button onClick={() => JobContext.delete(job.id)}>Delete</button>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default ShowJobs;