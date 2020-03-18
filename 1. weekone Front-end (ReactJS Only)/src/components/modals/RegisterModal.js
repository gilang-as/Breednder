import React, { Component } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";

class RegisterModal extends Component {
  constructor(props){
    super(props);

 
    this.signupClose = this.signupClose.bind(this);
    this.signupShow = this.signupShow.bind(this);
    
    this.state = {
        signup: false
    }
  }

  signupClose(){
    this.setState({
      signup:false
    });
  }

  signupShow(){
      this.setState({
        signup:true
      });
  }

  render(){
    return (
      <>
        <Modal show={this.state.signup} onHide={this.signupClose} animation={false}>
          <Modal.Title id="txt-form"><h2>Register</h2></Modal.Title>
          <Modal.Body className="signup-scrool">
            <Form>
            <Form.Group controlId="breeder">
              <Form.Label>Breeder</Form.Label>
              <Form.Control type="text" placeholder="Breeder" readOnly />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" readOnly />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="*******" readOnly />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone Breeder</Form.Label>
              <Form.Control type="text" placeholder="Phone Breeder" readOnly />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address Breeder</Form.Label>
              <Form.Control type="text" placeholder="Address Breeder" readOnly />
            </Form.Group>
            <Form.Group controlId="namePet">
              <Form.Label>Name Pet</Form.Label>
              <Form.Control type="text" placeholder="Name Pet" readOnly />
            </Form.Group>
            <Form.Group controlId="genderPet">
              <Form.Label>Gender Pet</Form.Label>
              <Form.Control type="text" placeholder="Gender Pet" readOnly />
            </Form.Group>
            <Form.Group controlId="spesiesPet">
              <Form.Label>Spesies Pet</Form.Label>
              <Form.Control as="select" disabled>
                <option>Kocheng Bar-bar</option>
                <option>Kocheng Oren</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="agePet">
              <Form.Label>Age Pet</Form.Label>
              <Form.Control type="text" placeholder="Age Pet" readOnly />
            </Form.Group>
          </Form>
          <Link to="/dashboard">
            <Button id="btn-true" variant="primary">Register</Button>
          </Link>
          </Modal.Body>
          <Button id="btn-false" variant="secondary" onClick={this.signupClose}> Close </Button>
        </Modal>
        <Button id="btn-home" className="btn btn-lg btn-block" onClick={this.signupShow}><b>Register</b></Button>
        </>
    )};
}

export default RegisterModal;
