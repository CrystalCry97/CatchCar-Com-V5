import React, { Component } from 'react'
import CompanyCarList from '../company_cars/CompanyCarList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render(){
        // console.log(this.props);
        const { companyCars }=this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 ">
                        <CompanyCarList companyCars= {companyCars}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companyCars: state.companyCar.companyCars
    }
}

export default connect(mapStateToProps)(Dashboard)