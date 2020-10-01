import React from 'react'

const Skill = (props) =>{

    return (
        <>
            <div className='a-skill'>
                <div className='a-skill-text'>
                    <p> {props.name} </p>
                </div>
                <div className='a-skill-range'>
                    <div style={{width:props.level+'%', backgroundColor:props.color}}>
                        {props.level}% &nbsp;&nbsp;{props.tag}
                    </div>
                </div>
            </div>
        </>
    );

}

export default Skill;