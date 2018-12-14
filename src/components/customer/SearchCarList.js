import React from 'react'
import SearchCarSummary from './SearchCarSummary'
import { Link } from 'react-router-dom'

const SearchCarList = ({companyCars}) => {
    return (
        <div className="project-list section">
            { 
                companyCars && companyCars.map(companyCar => {
                    return (
                        <Link to={'/searchresult/' + companyCar.id} key={companyCar.id}>
                            <SearchCarSummary companyCar={companyCar}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default SearchCarList