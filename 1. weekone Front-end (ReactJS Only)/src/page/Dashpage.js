import React, { Component } from "react";
import Deck from "../components/swipe/Deck";
import "../MainStyle.css";
import SideNavDashboard from "./items/SideNavDashboard";
import {
  FaRedo,
  FaTimes,
  FaHeart,
  FaMagic,
  FaRegWindowClose,
  FaUserTie,
  FaAngleDoubleRight,
  FaAngleDown,
  FaCheckSquare,
  FaUserTimes
} from "react-icons/fa";

class Dashpage extends Component {
  render() {
    return (
      <div className="frame">
        <SideNavDashboard />
        <div className="content">
          <div className="messages frame-slide">
            <div className="swipe" id="swipe">
              <Deck />
            </div>
          </div>
          <div className="message-input-one">
            <div className="wrap swipe-input-frame">
              <button className="submit-one">
                <FaRedo />
              </button>
              <button className="submit-one">
                <FaTimes />
              </button>
              <button className="submit-one">
                <FaHeart />
              </button>
              <button className="submit-one">
                <FaMagic />
              </button>
            </div>
          </div>
          <div className="message-input">
            <div className="wrap swipe-input-frame">
              <button className="submit">
                <FaAngleDown />
                <p>Hide</p>
              </button>
              <button className="submit">
                <FaRegWindowClose />
                <p>No</p>
              </button>
              <button className="submit">
                <FaCheckSquare />
                <p>Yes</p>
              </button>
              <button className="submit">
                <FaUserTie />
                <p>Open Profile</p>
              </button>
              <button className="submit">
                <FaUserTimes />
                <p>Close Profile</p>
              </button>
              <button className="submit">
                <FaAngleDoubleRight />
                <p>Next Photo</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashpage;
