import React, { Component } from 'react'
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
class Accueil extends Component {
    constructor(props){
        super(props)
        this.state={
            auth:localStorage.getItem('JWT')
        }
    }
    
    componentDidMount(){
    
    }

    render () {
                
        return (
            <MDBCard style={{width:'80%',margin:'20px auto'}}>
                <h1 style={{width:'40%',margin:'20px auto'}}>NOT FINISHED YET</h1>
            </MDBCard>
        )
    }
}

export default Accueil