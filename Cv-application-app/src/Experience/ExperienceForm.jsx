import React, { useState } from "react";

export default function ExperienceForm({onSubmit}) {
  const [ formData, setFormData ] = useState({
    companyName: "",
    positionTitle: "",
    responsibilitis: "",
    startingDate: "",
    endingDate: "",
    errors: {}
  });
  const [ submit, setSubmit ] = useState(false);

  function validateForm() {
    let errors = {};

    if (formData.companyName.trim() === "") {
      errors.companyName = "Company name is required!!"
    }

    if (formData.positionTitle.trim() === "") {
      errors.positionTitle = "Title is required!!";
    }

    if (formData.responsibilitis.trim() === "") {
      errors.responsibilitis = "Responsibilitis is required!!";
    }

    if (formData.startingDate.trim() === "") {
      errors.startingDate = "Date is required!"
    }

    if (formData.endingDate.trim() === "") {
      errors.endingDate = "Date is required!"
    }

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onSubmit({formData});
      setSubmit(true);
      setFormData((prevForm) => ({
        ...prevForm,
        errors: {}
      }))
    } else {
      setFormData((prevForm) =>({
        ...prevForm,
        errors: errors
      }));
    }
  }

  return (
    <>
    <div className="experienc-form">
      <h2>Experience</h2>
      <form>
      <h3>Company Name</h3>
      <Input setFormData={setFormData} name="companyName" type="text" value={formData.companyName} error={formData.errors.companyName} />
      <h3>Position Title</h3>
      <Input setFormData={setFormData} name="positionTitle" type="text" value={formData.positionTitle} error={formData.errors.positionTitle} />
      <h3>Responsibilitis</h3>
      <Input setFormData={setFormData} name="responsibilitis" type="text" value={formData.responsibilitis} error={formData.errors.responsibilitis}/>
      <h3>Starting Date</h3>
      <Input setFormData={setFormData} name="startingDate" type="date" value={formData.startingDate} error={formData.errors.startingDate}/>
      <h3>Ending Data</h3>
      <Input setFormData={setFormData} name="endingDate" type="date" value={formData.endingDate} error={formData.errors.endingDate}/>
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

function Input({name, value, setFormData, type, error}) {
  function handleInputs(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <>
      <input onChange={handleInputs} name={name} value={value} type={type}/>
      {error && <span>{error}</span>}
    </>
  )
}