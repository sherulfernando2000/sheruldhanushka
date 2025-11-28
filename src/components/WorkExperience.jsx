import React from 'react'
import { EXPERIENCES } from '../constants'
import ProjectCard from './handmade/project-card'
import { PROJECTS } from "../constants";

const WorkExperience = () => {
  return (
    <section className='pt-20 ' id='work'>
        <h2 className='text-center text-4xl font-semibold tracking-tighter'>WORK EXPERIENCE</h2>
        <div className='space-y-8 p-10'>
            <ProjectCard/>
        </div>
    </section>
  )
}

export default WorkExperience
