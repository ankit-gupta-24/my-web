import React from 'react'
import ProjectData from '../Data/ProjectData'
import Project from './Project'
import '../static/css/Portfolio.css'

const Portfolio = () =>{
    return (
        <>
        <div className='a-portfolio'>
            <h1 className='mt-3'>
                My Projects - 
            </h1>
            {
                ProjectData.map((elem)=>{
                    return <Project 
                    key={elem.id}
                    id={elem.id}
                    title={elem.title}
                    link={elem.link}
                    desc={elem.description}
                    tags={elem.tag}
                    img={elem.img}
                    />
                })
            }

        </div>
        </>
    );

}

export default Portfolio;