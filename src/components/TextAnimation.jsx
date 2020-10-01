import React, { useEffect, useState } from 'react';

const TextAnimation = () =>{
    const [text,setText] = useState("");    

    useEffect(()=>{
        let timer;
        const words = ['Need a Portfolio website ..','Need a school website ..', 'Need a Final year Project ..','Need a Business Website ..'];
        let i=0;

        const changeText = () =>{
            if(words.length > i+1){
                i++;
            }else{
                i=0;
            }
            setText(words[i]);
            timer = setTimeout(changeText,3000);
        }
        changeText();

        return () =>{
            clearTimeout(timer);
        }

    },[]);

    
    return (
        <>
        <div className='a-home-text-animation'>
            <h1 className='text'> {text}  </h1>
            <a className='btn btn-info' href='tel:8989411680'>Contact Me</a>
        </div>
        </>
    );
}

export default TextAnimation;