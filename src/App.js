import React, { useState, useContext } from 'react';

import './scss/index.scss';
import JobForm from './components/JobForm.jsx';
import ShowJobs from './components/ShowJobs.jsx'
import { JobsContext } from './context/Jobs';

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
      <JobsContext.Provider value={{
        jobs: jobApplication,
        save: saveNewJob}}>
        <h1>Add a Job Job Application To Track</h1>
        <JobForm />
        <ShowJobs/>
      </JobsContext.Provider>
    </div>
  );
}

export default App;
