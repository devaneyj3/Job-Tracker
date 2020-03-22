import React, { useState } from 'react';

import './scss/index.scss';
import JobForm from './components/JobForm.jsx';
import ShowJobs from './components/ShowJobs.jsx'

function App() {

  const [jobApplication, setJobApplication] = useState([])

  const saveNewJob = (value, cityValue) => {
    setJobApplication(
    [...jobApplication,{
      id: Date.now(),
      name: value,
      city: cityValue,
      completed: false

    }])
  }
  return (
    <div className="App">
      <h1>Add a Job Job Application To Track</h1>
      <JobForm saveNewJob={saveNewJob} />
      <ShowJobs jobs={jobApplication}/>
    </div>
  );
}

export default App;
