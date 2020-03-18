import React, { Component } from "react";
import { Image, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import RangeInput from "./RangeInput";

class SideNavProfile extends Component {
  render() {
    return (
      <div className="sidepanel">
        <div className="profile">
          <div className="wrap profile-frame">
            <Link to="/dashboard" className="profile-back profile-link">
              <FaAngleLeft />
            </Link>
            <Image
              className="profile-img online"
              src="http://emilcarlsson.se/assets/mikeross.png"
              alt=""
            />
            <b className="profile-name"> Profile</b>
          </div>
        </div>
        <div className="frame-profile-nav grid-profile-scrool">
          <div className="search title-style">
            <b className="">Account Setting</b>
          </div>
          <div className="contacts title-style">
            <Table className="table-bg">
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>admin@apaloe.com</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>000000000</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="search title-style">
            <b>Discovery Settings</b>
          </div>
          <div className="contacts title-style">
            <Form.Group
              controlId="exampleForm.ControlSelect1"
              className="slidecontainer"
            >
              <Form.Label>Maximum Distance</Form.Label>
              <RangeInput />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Age</Form.Label>
              <Form.Control as="select">
                <option>Child</option>
                <option>Teenager</option>
                <option selected>Adult</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Species</Form.Label>
              <Form.Control as="select">
                <option>Cat</option>
                <option>Dog</option>
                <option>Rabit</option>
                <option>Bird</option>
                <option>Sugar Glider</option>
              </Form.Control>
            </Form.Group>
          </div>
        </div>
        <div className="botton-group">
          <Link id="btn-true" className="button" to="/">
            Logout
          </Link>
        </div>
      </div>
    );
  }
}

export default SideNavProfile;
