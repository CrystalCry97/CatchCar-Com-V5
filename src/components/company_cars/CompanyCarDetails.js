import React from 'react'

const CompanyCarDetails= (props) => {
    const id= props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Proton Saga - id: {id}</span>
                    <p>Some car details here</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>CrystalCry Sdn. Bhd.</div>
                    <div>Posted on 3rd Sept, 2pm</div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCarDetails