import React, { useState } from "react";
import GeneralInfoForm from "../GeneralInfo/GeneralInfoForm";
import EducationForm from "../Education/EducationForm";
import ExperienceForm from "../Experience/ExperienceForm";

export default function FormSection() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ number, setNumber ] = useState('');
  
    const onFormSubmit = ( name,email,number ) => {
      setName(name);
      setEmail(email);
      setNumber(number);
    }

      const [ formData, setFormData ] = useState({
        schoolName: "",
        degree: "",
        startingDate: "",
        endingDate: "",    
      });
    
      const onFormSubmitEducation = ({formData}) => {
        setFormData(formData);
      }
    
       const [ formDataexp, setFormDataexp ] =  useState({
          companyName: "",
          positionTitle: "",
          responsibilitis: "",
          startingDate: "",
          endingDate: ""
        })
      
        const onFormSubmitExp = ({formDataexp}) => {
          setFormDataexp(formDataexp)
        }

  return (
    <>
      <div className="form-display">
      <GeneralInfoForm onSubmit={onFormSubmit}/>
      <EducationForm onSubmit={onFormSubmitEducation}/>
      <ExperienceForm onSubmit={onFormSubmitExp}/>
      </div>
      <div className="resume-display">
        <div className="general-display">
          <h2>General Information</h2>
          <div>

          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone number: {number}</p>
      </div>
        </div>
        <div className="education-display">
          <h2>Education Information</h2>
          <p>Scholl Name:{formData.schoolName}</p>
          <p>Degree:{formData.degree}</p>
          <p>Starting Date:{formData.startingDate}</p>
          <p>Ending Date:{formData.endingDate}</p>
        </div>
        <div className="exp-display">
          <h2>Experiece Info</h2>
          <p>Company: {formData.companyName}</p>
          <p>Position Title: {formData.positionTitle}</p>
          <p>Responsibilitis: {formData.responsibilitis}</p>
          <p>Start Date: {formData.startingDate}</p>
          <p>Ending Date: {formData.endingDate}</p>
        </div>

      </div>
    </>
  )
}