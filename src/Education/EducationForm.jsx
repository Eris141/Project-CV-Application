import React, { useState } from "react";

export default function EducationForm({onSubmit}) {
  const [ formData, setFormData ] = useState({
    schoolName: "",
    degree: "",
    startingDate: "",
    endingDate: "",
    errors: {},
  });
  const [ submit, setSubmit ] = useState(false);
  const [ showForm, setShowForm ] = useState(true);

  function validateForm() {
    let errors = {};

    if (formData.schoolName.trim() === "") {
      errors.schoolName = "School is required!!"
    }

    if (formData.degree.trim() === "") {
      errors.degree = "Degree is required!!"
    }

    if (formData.startingDate.trim() === "") {
      errors.startingDate = "Please put the starting Date!!"
    } 

    if (formData.endingDate.trim() === "") {
      errors.endingDate = "Please put the ending Date!!"
    } else {
      delete errors.endingDate;
    }

    return errors;
  };

  function HandleSubmit(e) {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onSubmit({formData});
      setSubmit(true);
      
      setFormData((prevForm) => ({
        ...prevForm,
        errors: {},
      }));
    } else {
      setFormData((prevForm) => ({
        ...prevForm,
        errors: errors
      }));
    }
  };
  
  function handleSubmit() {
    submit === true ? setSubmit(false) : setSubmit(true);
  };
  
  function handelDelete() {
    setFormData({
      schoolName: "",
      degree: "",
      startingDate: "",
      endingDate: "",
      errors: {},
    });
    setSubmit(false);
    setShowForm(true);
  };


  function HandleCompletetRender() {
    if (showForm && formData.schoolName !== "") {
      return (

          <div className="form">
          <h2>Educatio here</h2>
          <p>{formData.schoolName}</p>
          <p>{formData.startingDate} - {formData.endingDate}</p>
          <button onClick={handelDelete} >Delete</button>
          <button onClick={handleSubmit}>Edit</button>
          </div>
      )
    }
  };


  if (submit === false ) {
    return (
      <>
      <div className="form">
        <h2>Education Info</h2>
      <form>
        <p>School Name</p>
        <Inputs setFormData={setFormData} type="text" value={formData.schoolName} name="schoolName" error={formData.errors.schoolName}/>
        <p>Deggree/Program</p>
        <Inputs setFormData={setFormData} type="text" value={formData.degree} name="degree"  error={formData.errors.degree}/>
        <p>Starting Date</p>
        <Inputs setFormData={setFormData} type="date" value={formData.startingDate} name="startingDate" error={formData.errors.startingDate}/>
        <p>Ending Date</p>
        <Inputs setFormData={setFormData} type="date" value={formData.endingDate} name="endingDate" error={formData.errors.endingDate}/>
      </form>
        <button onClick={HandleSubmit} onSubmit={HandleSubmit}>Submit</button>
        {/* <button onClick={HandleSubmit} >Add New</button> */}
      </div>
      </>
    )
  } else {
      return (
        <>
        <HandleCompletetRender />
      </>
    )
  }
  
}

function Inputs({name, setFormData, type, value, error}) {
  function handleInput(e) {
    const { name, value } = e.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value
    }))
  }
  return (
    <>
    <input onChange={handleInput} type={type} value={value} name={name}/>
    {error && <span>{error}</span>}
    </>
  )
} 