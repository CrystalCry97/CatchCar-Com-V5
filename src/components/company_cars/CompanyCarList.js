import React from 'react'
import CompanyCarSummary from './CompanyCarSummary'

const ProjectList = ({companyCars}) => {
    return (
        <div className="project-list section">
            { companyCars && companyCars.map(companyCar => {
                return (
                    <CompanyCarSummary companyCar={companyCar} key={companyCar.id}/>
                )
            })}
        </div>
    )
}

export default ProjectList