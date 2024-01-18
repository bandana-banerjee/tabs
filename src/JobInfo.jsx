import React from 'react'
import JobDuties from './JobDuties'

const JobInfo = ({ jobs, currentItem }) => {
    const { company, dates, duties, title } = jobs[currentItem];
    return (
        <article className='job-info'>
            <h3>{title}</h3>
            <span className='job-company'>{company}</span>
            <p className='job-date'>{dates}</p>
            <JobDuties duties={duties} />
        </article>
    )
}

export default JobInfo