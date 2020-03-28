import React, { useContext } from 'react';
import useForm from '../hooks/useForm';
import { JobsContext } from '../context/Jobs';


const JobForm = () => {
    const jobs = useContext(JobsContext)
    const [values, handleChange, submitNewJob] = useForm(
        'signUpform',
        {
        newJob: '',
        city: '',
        postion: ''
    }, () => jobs.save(values.newJob, values.city, values.position));
    return (
        <div className='jobForm'>
            <form onSubmit={submitNewJob}>
                <input type="text" 
                    data-testid = "newJob"
                    name = 'newJob'
                    placeholder="Add Company"
                    onChange={handleChange}
                    value={values.newJob}
                    ></input>
                    <input type="text" 
                    name='city'
                    data-testid = 'city'
                    placeholder="Add City"
                    onChange={handleChange}
                    value={values.city}
                    ></input>
                    <input type="text" 
                    data-testid = "position"
                    name = 'position'
                    placeholder="Add Position"
                    onChange={handleChange}
                    value={values.position}
                    ></input>
                <button>Add Application</button>
            </form>
        </div>
    )
}

export default JobForm;