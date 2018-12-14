import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCompanyCar } from '../../store/actions/companyCarActions'
import { Redirect } from 'react-router-dom'
import { storage } from '../../config/firebaseConfig'

class AddCompanyCar extends Component {
    state={
        carImage:null,
        carImageURL:'',
        carName:'',
        carSeater: '',
        carTransmission:'',
        carOtherFeatures: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleChangeImage= (e) => {
        if(e.target.files[0]){
            const carImage = e.target.files[0];
            //console.log( "carImage " +carImage)
            const { companyAuth } = this.props;
            this.setState(()=>({carImage}));
            //const { carImage } = this.state;
            const uploadTask= storage.ref(`carImages/${companyAuth.uid}/${carImage.name}`).put(carImage);
            uploadTask.on('state_changed',
                (snapshot) => {
    
                },(error) => {
                    console.log(error);
                },() => {
                    storage.ref(`carImages/${companyAuth.uid}`).child(carImage.name).getDownloadURL().then(carImageURL => {
                        console.log(carImageURL);
                        this.setState({carImageURL});
                    }).then(() => {
                        this.props.addCompanyCar(this.state)
                    })
                    
                });
        }
    }
    handleSubmit=(e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.history.push('/company-dashboard');
    }
    
    render() {
        const { companyAuth } = this.props;
        //console.log(this.props);
        if(!companyAuth.uid)
            return <Redirect to='/company-signin' />
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add New Car</h5>
                    <div className="file-field input-field">
                        <div className="btn orange lighten-1 z-depth-0">
                            <span>Upload Car Image</span>
                            <input type="file" id="carImage" accept="image/*" onChange={this.handleChangeImage} />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="carName">Car Name</label>
                        <input type="text" id="carName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="carSeater">No of Car Seats</label>
                        <input type="text" id="carSeater" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="carTransmission">Car Transmission</label>
                        <input type="text" id="carTransmission" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="carOtherFeatures">Other Features</label>
                        <textarea id="carOtherFeatures" className="materialize-textarea" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn orange lighten-1 z-depth-0">Add Car</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
    return {
        companyAuth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCompanyCar: (companyCar) => dispatch(addCompanyCar(companyCar))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddCompanyCar) 