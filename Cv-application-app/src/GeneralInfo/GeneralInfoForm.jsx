import React, { useState } from 'react';

export default function GeneralInfoForm({onSubmit}) {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ number, setNumber ] = useState('');
  const [errors, setErrors] = useState({});

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
    } else  {
      setErrors(errors)
    }
  }
  return (
    <>
    <div className='general-info-form'>
    <form>
      <h3>Name</h3>
      <InputHandle type="text"  name={name} setName={setName} error={errors.name} />
      <h3>Email</h3>
      <InputHandle type="email" name={email} setName={setEmail} error={errors.email} />
      <h3>Number</h3>
      <InputHandle type="number"  name={number} setName={setNumber} error={errors.number} />
    </form>
    <button onSubmit={handleSubmit} onClick={handleSubmit}>Save</button>
    </div>
    </>
  )
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

