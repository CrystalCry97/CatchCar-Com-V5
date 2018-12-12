import React from 'react'
import CompanyCarSummary from './CompanyCarSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({companyCars}) => {
    return (
        <div className="project-list section">
            { companyCars && companyCars.map(companyCar => {
                return (
                    <Link to={'/companyCar/' + companyCar.id} key={companyCar.id}>
                        <CompanyCarSummary companyCar={companyCar}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList