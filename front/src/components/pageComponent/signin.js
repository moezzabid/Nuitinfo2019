import React, { Component } from 'react'
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
class Signin extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
        };
      }
    
    render () {
        return (
            <MDBCol md="4" style={{margin:'20px auto'}}>
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.sendForm}>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="name"
                      value={this.state.name}
                      onInput={this.handleInput}
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                      value={this.state.email}
                      onInput={this.handleInput}
                    />
                      
                  </div>
                  <div className="text-center py-4 mt-3">
                
                    <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                 </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        )
    }
}

export default Signin