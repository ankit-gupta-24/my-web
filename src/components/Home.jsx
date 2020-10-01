import React from 'react';
import '../static/css/Home.css';
import TextAnimation from './TextAnimation'

const Home = () =>{
    return (
        <>
        <div className='a-home'>
            <div className='a-home-col'>
                <div className='a-name'>
                    <h1>Ankit Gupta</h1>
                    <p>Full Stack Web Developer</p>
                </div>
                <div className='a-keyword'>
                    <span>Design</span>
                    <span>Code</span>
                    <span>Develop</span>                        
                </div>
            </div>
            <div className='a-profile-wrapper a-home-col'>
                <img src={require('../static/images/profile3.jpg')} alt='profile' className='a-profile' />
            </div>
        </div>
        <TextAnimation />
        </>
    );
}

export default Home;