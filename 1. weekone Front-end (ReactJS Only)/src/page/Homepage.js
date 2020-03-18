import React, { Component } from 'react';
import {Nav, Navbar, Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../logo.png';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';


class Homepage extends Component {
  render(){
    return (
      <>
        <div className="bg homepagefull">
          <Navbar variant="dark" >
            <Navbar.Brand href="/"><Image className="logo-home" alt="Breednder" src={logo} /></Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
          </Navbar>
          <section className="pt-5 pb-5 position-relative">
            <div className="container pt-5 pb-5 position-relative">
              <div className="row d-flex justify-content-between pt-lg-5 align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-7 text-center text-lg-left mb-5 mb-lg-0">
                  <h1 className="txt-home display-3 font-weight-bold">Find Your Pet's Match</h1>
                  <div className="my-4">
                    <p className="lead txt-color-home">Swipe <b>Right.</b> Make your pet <b>Happy</b></p>
                  </div>
                  <div className="d-flex">
                    <span className="txt-color-home">198379K Pet Joined</span>
                  </div>
                </div>
                <div className="col">
                  <div className="row justify-content-center">
                    <div className="col-xl-8 col-md-10">
                      <div className="form-group text-center">
                        <LoginModal/>
                        <RegisterModal/>
                        <small className="txt-color-home">by clicking enter, you agree to <Link to="/our-terms">Our Terms</Link>. Learn how we process your data in our <Link to="/privacy-police">Privacy Police </Link> and <Link to="/cookies-police">Cookies Police</Link></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )};
}

export default Homepage;
