import React, { Component } from 'react'
import SearchCarList from '../customer/SearchCarList'
import SearchCarFilters from '../customer/SearchCarFilters'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class SearchResultPage extends Component {
    render(){

        const { companyCars }=this.props;
        return (
            <div className="dashboard container">
                <SearchCarFilters />
                <div className="row">
                    <div className="col s12 ">
                        <SearchCarList companyCars= {companyCars}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);    
    return {
        companyCars: state.firestore.ordered.companyCars
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { 
            collection: 'companyCars',
            where: [
                ['companyName', '==', 'ABC Car Rental']
            ]
        }
    ])
)(SearchResultPage)