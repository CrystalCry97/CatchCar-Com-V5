import React, { Component } from 'react'
import { connect } from 'react-redux'
import { companySignIn } from '../../store/actions/companyAuthActions'
import { Redirect } from 'react-router-dom'

class CompanySignIn extends Component {
    state={
        email:'',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e) => {
        e.preventDefault();
        this.props.companySignIn(this.state);
    }
    
    render() {
        const { companyAuthError, companyAuth } = this.props;

        if(companyAuth.uid)
            return <Redirect to='/company-dashboard' />

        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label  htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn orange lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">
                            { companyAuthError ? <p>{companyAuthError}</p>: null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companyAuthError: state.companyAuth.companyAuthError,
        companyAuth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        companySignIn: (creds) => dispatch(companySignIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanySignIn) 