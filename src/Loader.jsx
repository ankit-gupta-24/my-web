import React from 'react'
import loader from './static/images/loader.jpg';
import { useEffect,useState } from 'react';

const Loader = () =>{
  const [count,setCount] = useState(3);
  useEffect(()=>{
    let timer;
    const increment = () =>{

      setCount((prevCount)=>{
        if(prevCount>0){
          return prevCount-1;
        }
        return 0;
      });
      timer = setTimeout(increment,1000);
      
    }
    increment();
    return ()=>{
        clearTimeout(timer);
    }
  },[]);
    return (
    <>
      {count?
        <div className='loader-div'>
          <div>
            <img src={loader} alt='loader' />
          </div>
        </div>:null}
    </>);
}

export default Loader;