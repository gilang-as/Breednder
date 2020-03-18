import React, { Component } from 'react';
import {Image, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import SideNavProfile from './items/SideNavProfile';

class UpdatePetpage extends Component {

render(){
  return (
	<div className="frame">
    <SideNavProfile/>
    <div className="content">
      <div className="contact-profile">
        <b className="pet-list-title">Update Pet</b>
          <Link to="/profile">
            <div className="social-media addpet-form">
                <Button id="btn-false">Cancel</Button>
            </div>
          </Link>
      </div>
      <div className="messages profile-mboh-ah carousel-profile-frame pet-list-frame">
        <div className="carousel-profile pet-list">
          <div className="profile-card">
              <Form>
                <Row>
                  <Col md={4} className="upload-size">
                    <Card className="image-upload-pet photo-item-add-pet test">
                      <Image className="card-img-top img-upload-pet" src={require(`../image/kucing1.jpg`)}/>
                      <Link className="remImage" to="#" id="delete">
                        <Image alt="" className="delete-button-image-pet" src="https://image.flaticon.com/icons/svg/261/261935.svg"/>
                      </Link>   
                    </Card>
                  </Col>
                  <Col md={4} className="upload-size">
                    <Card className="image-upload-pet photo-item-add-pet">
                    <input className="upload-photospet" type="file"/>
                    </Card>
                  </Col>
                  <Col md={4} className="upload-size">
                    <Card className="image-upload-pet photo-item-add-pet">
                    <input className="upload-photospet" type="file"/>
                    </Card>
                  </Col>
                  <Col md={4} className="upload-size">
                    <Card className="image-upload-pet photo-item-add-pet">
                    <input className="upload-photospet" type="file"/>
                    </Card>
                  </Col>
                  <Col md={4} className="upload-size">
                    <Card className="image-upload-pet photo-item-add-pet">
                    <input className="upload-photospet" type="file"/>
                    </Card>
                  </Col>
                  <Col md={4} className="upload-size">
                    <Card className="image-upload-pet photo-item-add-pet">
                    <input className="upload-photospet" type="file"/>
                    </Card>
                  </Col>
                  <Col md={4} className="upload-size">
                    <Card className="image-upload-pet photo-item-add-pet">
                    <input className="upload-photospet" type="file"/>
                    </Card>
                  </Col>
                  <Col md={4} className="upload-size">
                    <Card className="image-upload-pet photo-item-add-pet">
                    <input className="upload-photospet" type="file"/>
                    </Card>
                  </Col>
                  <Col md={4} className="upload-size">
                    <Card className="image-upload-pet photo-item-add-pet">
                    <input className="upload-photospet" type="file"/>
                    </Card>
                  </Col>
                </Row>
                <Form.Group controlId="namePet">
                  <Form.Label>Name Pet</Form.Label>
                  <Form.Control type="text" placeholder="Name Pet" readOnly />
                </Form.Group>
                <Form.Group controlId="genderPet">
                  <Form.Label>Gender Pet</Form.Label>
                  <Form.Control type="text" placeholder="Gender Pet" readOnly />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="spesiesPet">
                      <Form.Label>Spesies Pet</Form.Label>
                      <Form.Control as="select" disabled>
                        <option>Kocheng Bar-bar</option>
                        <option>Kocheng Oren</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="agePet">
                      <Form.Label>Age Pet</Form.Label>
                      <Form.Control type="text" placeholder="Age Pet" readOnly />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows="3" readOnly/>
                </Form.Group>
                <Link to="/profile">
                  <Button id="btn-true">Save</Button>
                </Link>
              </Form>
          </div>
        </div>
      </div>
    </div>
	</div>
  )};
}

export default UpdatePetpage;
