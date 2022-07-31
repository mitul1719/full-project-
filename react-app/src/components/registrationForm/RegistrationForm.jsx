import React from 'react'

const RegistrationForm = ({login}) => {
    function onReg(e){
        e.preventDefault();
        login(true);
    }
  return (
    <>
    <h1>Regitration Form</h1>
    <form onSubmit={onReg}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" /><br/>
        <label htmlFor="username">Password</label>
        <input type="password" name="password" id="password" /><br/>
        <input type="submit" value="Submit" />
    </form>
    </>
  )
}

export default RegistrationForm