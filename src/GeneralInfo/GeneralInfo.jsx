import React, { useState } from "react";
import GeneralInfoForm from "./GeneralInfoForm";

export default function GeneralInfo() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ number, setNumber ] = useState('');

  const onFormSubmit = ( name,email,number ) => {
    setName(name);
    setEmail(email);
    setNumber(number);
  }

  return (
    <>
      <GeneralInfoForm onSubmit={onFormSubmit} />
      <h2>General Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone number: {number}</p>
    </>
  )

}