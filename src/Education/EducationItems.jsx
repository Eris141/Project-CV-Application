import React, { useState } from "react";
import EducationForm from "./EducationForm";

export default function EducationFormInfo() {
  const [ formData, setFormData ] = useState({
    schoolName: "",
    degree: "",
    startingDate: "",
    endingDate: "",    
  });

  const onFormSubmit = ({formData}) => {
    setFormData(formData);
  }


  return (
    <>
    <div className="general-display">
    <EducationForm onSubmit={onFormSubmit} />
    <div className="education-render">
      <h2>Education Information</h2>
      <p>Scholl Name:{formData.schoolName}</p>
      <p>Degree:{formData.degree}</p>
      <p>Starting Date:{formData.startingDate}</p>
      <p>Ending Date:{formData.endingDate}</p>
    </div>

    </div>
    </>
  )
}