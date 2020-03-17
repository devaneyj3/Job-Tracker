import React from 'react';
import useForm from '../hooks/useForm';

const JobForm = props => {
    const [values, handleChange, submitNewJob] = useForm({
        newJob: '',
        city: ''
    }, () => props.saveNewJob(values.newJob, values.city));
    return (
        <div className='jobForm'>
            <form onSubmit={submitNewJob}>
                <input type="text" 
                    name = 'newJob'
                    placeholder="Add Company"
                    onChange={handleChange}
                    value={values.newJob}
                    ></input>
                    <input type="text" 
                    name='city'
                    placeholder="Add City"
                    onChange={handleChange}
                    value={values.city}
                    ></input>
                <button>Add Application</button>
            </form>
        </div>
    )
}

export default JobForm;