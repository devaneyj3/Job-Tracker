import React, { useState } from 'react';

import './scss/index.scss';
import AddJob from './components/AddJob.jsx';
import Applied from './components/Applied.jsx'
import Offered from './components/Offered';
import Rejected from './components/Rejected';
import Interviewed from './components/Interviewed';
import { JobsContext } from './context/Jobs';

function App() {

  const [jobApplication, setJobApplication] = useState([])

  const saveNewJob = (value, cityValue, positionValue) => {
    setJobApplication(
    [...jobApplication,{
      id: Date.now(),
      name: value,
      city: cityValue,
      position: positionValue,
      completed: false

    }])}
  const deleteJob = id => {
    const filterJobs = jobApplication.filter(jobApp => jobApp.id !== id);
    setJobApplication(
      [...filterJobs],
    )
  }
  return (
    <div className="App">
      <JobsContext.Provider value={{
        jobs: jobApplication,
        save: saveNewJob,
        delete: deleteJob}}>
        <h1>Add a Job Job Application To Track</h1>
        <AddJob />
        <div className='containers'>
          <Applied/>
          <Offered />
          <Rejected />
          <Interviewed />
        </div>
      </JobsContext.Provider>
    </div>
  );
}

export default App;
