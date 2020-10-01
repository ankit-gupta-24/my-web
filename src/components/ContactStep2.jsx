import React from 'react'

const ContactStep2 = (props) =>{
    if (props.currStep !== 2 ){
        return null;
    } 
    return ( 
        <>
        <label>Subject:</label>
        <input type='text' placeholder='Enter subject' name='subject' value={props.subject} onChange={props.handleChange} />
        <label>Message:</label>
        <textarea placeholder='Enter message' name='message' rows='' cols='' value={props.message} onChange={props.handleChange} />
        <div>
            {props.getPrevButton()}            
            <button type='submit' style={{backgroundColor:'green',float:'right'}} >Submit</button>
        </div>
        </>
    );

}

export default ContactStep2;