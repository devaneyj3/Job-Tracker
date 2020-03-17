import React from 'react';
import useInput from './customHook'

const JobForm = props => {
    const [newJob, setNewJob, handleJobChange] = useInput('');
    const [city, setCity, handleCityChange] = useInput('');

    const submitNewJob= (e) => {
        e.preventDefault()
        props.saveNewJob(newJob, city)
    }
    return (
        <div className='jobForm'>
            <form onSubmit={submitNewJob}>
                <input type="text" 
                    placeholder="Add Company"
                    onChange={handleJobChange}
                    value={newJob}
                    ></input>
                    <input type="text" 
                    placeholder="Add City"
                    onChange={handleCityChange}
                    value={city}
                    ></input>
                <button>Add Application</button>
            </form>
        </div>
    )
}

export default JobForm;