import React, { Component } from "react";
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password:""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendForm = (e) => {
    e.preventDefault()
      console.log(this.state)
   /* fetch('https://some/url', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
      })
    })
    .then(res => res.json())
    .catch(err => console.log(err));
*/}

  render() {
    console.log(this.state)
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
                  <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                name="password"
                validate
                onInput={this.handleInput}
              />
              </div>
              <div className="text-center py-4 mt-3">
            
                <MDBBtn color="indigo" type="submit">Register</MDBBtn>
             </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default Signup;