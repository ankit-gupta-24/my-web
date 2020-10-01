import React, { useState } from 'react'
import ContactStep1 from './ContactStep1';
import ContactStep2 from './ContactStep2';
import '../static/css/Contact.css';

const Contact = () =>{

    const [state,setState] = useState({
        currStep:1,
        name:'',
        email:'',
        mobile:'',
        subject:'',
        message:''
    });

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setState((prevState)=>{
            return {...prevState,[name]:value};
        })
    }

    const validateForm = () =>{
        if(state.name === null || state.mobile === null){
            return false
        }
        if (state.mobile.length !== 10){
            return false
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateForm()){

            const url = `https://script.google.com/macros/s/AKfycbyTRVMx6nwxX-yZmS6oexhAHRYpTaW0QSG2DpBKGXPTUKSUY3pi/exec?
            &name=${state.name}&email=${state.email}&mobile=${state.mobile}&subject=${state.subject}&message=${state.message}`;

            fetch(url).then((res)=>{
                alert('Thankyou! I will contact you soon.');
                setState({currStep:1,name:'',email:'',mobile:'',subject:'',message:''});
            }).catch((err)=>{
                alert('Oops! Error while processing request.');
            });
        }
        else{
            alert('Please fill the required details (name and mobile no) correctly.')
        }
      }

    const prev = () =>{
        let cstep = state.currStep;
        if(cstep === 2){
            setState((prevState)=>{
                return {...prevState,currStep:1};
            });
        }
    }

    const next = () =>{
        let cstep = state.currStep;
        if(cstep === 1){
            setState((prevState)=>{
                return {...prevState,currStep:2};
            });
        }
    }
    
    const getNextButton = () =>{
        let cStep = state.currStep;
        if(cStep<2){
            return (
                <div className='btn-next'><button  onClick={next} >Next</button></div>
            );
        }
        return null;
    }
    const getPrevButton = () =>{
        let cStep = state.currStep;
        if(cStep !== 1){
            return (
                <button onClick={prev} >Previous</button>
            );
        }
    }

    return (
        <>
        <div>
            <div className='a-contact'>
                <h3 className='text-center'>Contact Form</h3>
                <p><small>* Required Fields</small></p>
                <form onSubmit={handleSubmit}>
                    <ContactStep1 
                    currStep={state.currStep}
                    name={state.name}
                    email={state.email}
                    mobile={state.mobile}
                    handleChange = {handleChange}
                    />
                    <ContactStep2
                    currStep={state.currStep}
                    subject={state.subject}
                    message={state.message}
                    handleChange = {handleChange}
                    getPrevButton = {getPrevButton}
                    />

                    {getNextButton()}
                    
                </form>
            </div>

            <div className='a-contact-social'>
                <a href='https://www.facebook.com/AnkitGupta2408' className='fa fa-facebook a-contact-fb' ></a>
                <a href='https://www.instagram.com/gupta.ankit.2408/' className='fa fa-instagram a-contact-insta' ></a>
                <a href='https://wa.me/918989411680?text=Hello' className='fa fa-whatsapp a-contact-wp' ></a>
                <a href='https://github.com/ankit-gupta-24' className='fa fa-github a-contact-git' ></a>
                <a href='https://www.linkedin.com/in/ankit8989gupta/' className='fa fa-linkedin a-contact-ln' ></a>
                <a href='https://twitter.com/ANKITGU28845706' className='fa fa-twitter a-contact-tw' ></a>
            </div>
        </div>
        </>
    );
}

export default Contact;