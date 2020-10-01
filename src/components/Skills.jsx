import React from 'react';
import Skill from './Skill';
import { ProgrammingSkills, FrameworkSkills } from '../Data/SkillsData';
import '../static/css/Skills.css';

const Skills = () =>{

    const colors = ['orange','blueviolet','brown','cadetblue','coral','cornflowerblue','darkblue','darkgoldenred','darkcyan','red'];
    let i=-Math.floor(Math.random() * colors.length/5);

    return (
        <>
        <div className='a-skills'>
            <h4> Programming Skills </h4>
            <div className='a-prog-skills'>
                {ProgrammingSkills.map((elem) =>{
                    i++;
                    return <Skill 
                        key={elem.id}
                        name={elem.skill}
                        level={elem.level}
                        tag={elem.tag}
                        color={colors[i]}
                    />;
                })}
            </div>
            <h4> Frameworks / Libraries </h4>
            <div className='a-fram-skills'>
                {FrameworkSkills.map((elem) =>{
                    i++;
                    return <Skill 
                        key={elem.id}
                        name={elem.skill}
                        level={elem.level}
                        tag={elem.tag}
                        color={colors[i]}
                    />;
                })}

            </div>
        </div>
        </>
    );
}

export default Skills;