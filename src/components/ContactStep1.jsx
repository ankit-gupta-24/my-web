import React from 'react'

const ContactStep1 = (props) =>{
    if (props.currStep !== 1 ){
        return null;
    } 
    return ( 
        <>
        <label>* Name:</label>
        <input type='text' name='name' placeholder='Enter Name' value={props.name} onChange={props.handleChange} required />
        <label>Email:</label>
        <input type='email' name='email' placeholder='Enter Email' value={props.email} onChange={props.handleChange} />
        <label>* Mobile:</label>
        <input type='number' name='mobile' placeholder='Enter Mobile Number' value={props.mobile} onChange={props.handleChange} required/>
        </>
    );

}

export default ContactStep1;