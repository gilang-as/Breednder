import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import PhotoGridItem from './PhotoGridItem';

class SideNavDashboard extends Component {

render(){
  return (
        <div className="sidepanel MobileSideNav">
					<div className="profile">
						<Link to="/profile" className="profile-link">
						<div className="wrap profile-frame">
							<Image className="profile-img online" src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
							<b className="profile-name"> Mike Ross</b>
						</div>
						</Link>
					</div>
					<div className="search title-style">
						<b>Match</b>
					</div>
					<div className="contacts grid-photo">
						<PhotoGridItem/>
					</div>
				</div>
				
  )};
}

export default SideNavDashboard;
