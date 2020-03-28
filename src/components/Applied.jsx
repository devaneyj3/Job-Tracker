import React, { useContext } from 'react';
import { JobsContext } from '../context/Jobs';
import '../scss/applied.scss';

const ShowJobs = () => {

    const JobContext = useContext(JobsContext);
    return (
        <>
        <div className='applied-section'>
            <h2>Applied</h2>
            {JobContext.jobs.map(job => {
                return (
                    <div className='applied'>
                        <div key={job.id}>Company: {job.name}</div>
                        <p>City: {job.city}</p>
                        <p>Position: {job.position}</p>
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