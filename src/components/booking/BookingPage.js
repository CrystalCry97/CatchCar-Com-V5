import React from 'react'

class BookingPage extends React.Component{
    state= {

    }



    handleSubmit= (e) => {
        e.preventDefault();

    }

    render(){
        return(
            <div className="center">
                <form onSubmit={this.handleSubmit} >
                    
                </form>
            </div>  
        )
    }
}



export default (BookingPage) 