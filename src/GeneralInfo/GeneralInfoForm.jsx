import React, { useState } from 'react';

export default function GeneralInfoForm({onSubmit}) {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ number, setNumber ] = useState('');
  const [errors, setErrors] = useState({});
  const [ submit, setSubmit ] = useState(false);

  function validateForm() {
    let errors = {};

    if (name.trim() === "") {
      errors.name = "Name is required!!"
    }

    if (email.trim() === '') {
      errors.email = "Email is required!"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Ivalid email format"
    }

    if (number.trim() === '') {
      errors.number = "Number is requried!!"
    } else if (isNaN(number)) {
      errors.nunmber = "Ivalid number!!"
    }
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0 ) {
      onSubmit(name, email, number)
      setSubmit(true);
      setErrors({})
    } else  {
      setErrors(errors)
    }
  }
  if (submit === false ) {

    return (
      <>
    <div className='form'>
      <h2>General Info</h2>
    <form>
      <p>Name</p>
      <InputHandle type="text"  name={name} setName={setName} error={errors.name} />
      <p>Email</p>
      <InputHandle type="email" name={email} setName={setEmail} error={errors.email} />
      <p>Number</p>
      <InputHandle type="number"  name={number} setName={setNumber} error={errors.number} />
    </form>
    <button onSubmit={handleSubmit} onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
  } else {
    return (
      <>
      <div className='form'>
       <h2>General info</h2>
       <p>{name}</p>
       <p>{email}</p>
      <button onClick={() => {
        submit === false ? setSubmit(true) : setSubmit(false);
      }}>Edit</button>
    </div>
      </>
    )
  }
}

function InputHandle({ name,setName,type,error}) {
  const handleInput = (e) => {
  setName(e.target.value)
  }
  return (
    <>
    <input  type={type}  value={name} onChange={handleInput}/>
    {error && <span>{error}</span>}
    </>
  )
}

