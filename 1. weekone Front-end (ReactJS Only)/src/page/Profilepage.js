import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import '../MainStyle.css';
import { Link } from "react-router-dom";
import AddPetModal from '../components/modals/AddPetModal';
import SideNavProfile from './items/SideNavProfile';
import Carousel from 'nuka-carousel';
import { FaUserAstronaut,FaTransgender,FaMapMarkedAlt,FaPhoneSquare } from 'react-icons/fa';

class Dashpage extends Component {

render(){
  return (
	<div className="frame">
		<SideNavProfile/>
    <div className="content">
      <div className="contact-profile">
        <b className="pet-list-title">Pet List</b>
        <div className="social-media addpet-form">
          <AddPetModal/>
        </div>
      </div>
      <Row className="messages carousel-profile-frame pet-list-frame">
        <Col md={4} className="carousel-profile pet-list">
          <Carousel className="max-image" >
            <img alt="" src={require(`../image/kucing1.jpg`)} />
            <img alt="" src={require(`../image/kucing2.jpg`)} />
          </Carousel>
          <div className ="info-pet-frame">
            <div className="profile-name-pet-frame">
              <h3>Gerry</h3>
              <h6>Cat</h6>
            </div>
            <div className="profile-card">
              <table className="bg-table-profile">
                  <tbody>
                    <tr>
                      <td><FaUserAstronaut/> Breeder : AAAA</td>
                    </tr>
                    <tr>
                      <td><FaMapMarkedAlt/> 10 Kilometer dari sini</td>
                    </tr>
                    <tr>
                      <td><FaTransgender/> Adult Milf</td>
                    </tr>
                    <tr>
                      <td><FaPhoneSquare/> Phone Brider : 000000000</td>
                    </tr>
                  </tbody>
                </table>
              <Link to="/update-pet">
                <Button id="btn-true">Edit</Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col md={4} className="carousel-profile pet-list">
          <Link to="/add-pet">
            <div className="pet-list-add">
              <Button id="pet-add-button"><b>Add Pet</b></Button>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
	</div>
  )};
}

export default Dashpage;
