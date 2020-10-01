import React from 'react'

const Project = (props) =>
{
    return (
        <>
        <div className='a-project'>
            <div className='a-prj-img'>
                <img src={props.img} alt={props.title} />
            </div>
            <div  className='a-prj-desc'>
                <h4>{props.title}</h4>
                <a href={props.link}>{props.link}</a>
                <p><i>{props.tags}</i> </p>
                <p>{props.desc} </p>
            </div>            
        </div>
        </>
    );
}

export default Project;