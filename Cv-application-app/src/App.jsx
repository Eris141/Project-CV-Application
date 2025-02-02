import { useState } from 'react'
import './App.css'
import GeneralInfo from './GeneralInfo/GeneralInfo'
import EducationFormInfo from './Education/EducationItems'
import ExperienceItems from './Experience/ExperienceItem'

function App() {
  return (  
    <>
      <div className='app'>
        <GeneralInfo/>
        <EducationFormInfo/>
        <ExperienceItems/>
        </div>
     </>
  )
}

export default App
