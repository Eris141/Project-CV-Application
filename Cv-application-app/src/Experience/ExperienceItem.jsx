import React, { useState } from "react";
import ExperienceForm from "./ExperienceForm";

export default function ExperienceItems() {
  const [ formData, setFormData ] =  useState({
    companyName: "",
    positionTitle: "",
    responsibilitis: "",
    startingDate: "",
    endingDate: ""
  })

  const onFormSubmit = ({formData}) => {
    setFormData(formData)
  }

  return (
    <>
    <div className="experiece-info">
    <ExperienceForm  onSubmit={onFormSubmit}/>
    <div className="exp-render">
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