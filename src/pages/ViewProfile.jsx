import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import {adminDetailsData} from "./data.js"
import "../App.css";




class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin : adminDetailsData.getCurrentUser() || {}
    };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }

  render() {
    
    const {admin} = this.state; 
    return (
      <div>
        <NavBar />
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Here are your details
          </h3>
        </div>

        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*Write code to create labels for name,email,dob,mobileno and location */}
            <div className="FormField">
             <span className="">Username</span>
             <input type="text" name="name" id="name" className="FormField__Input" value={this.admin.name} onChange={this.handleChange} placeholder="Enter email"/>
            </div>
            <div className="FormField">
             <span className="">Email ID</span>
             <input type="email" id="email"  name="email" className="FormField__Input" value={this.admin.email} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
            <div className="FormField">
             <span  className="">Date of Birth</span>
             <input type="date" id="dob"  name="dob" className="FormField__Input" value={this.admin.dob} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
            <div className="FormField">
             <span className="">Mobile No</span>
             <input type="ph" name="mobile" id="mobile" className="FormField__Input" value={this.admin.mobile} onChange={this.handleChange} placeholder="Enter email"/>
            </div>
            <div className="FormField">
             <span className="">Location</span>
             <input type="location" id="location"  name="location" className="FormField__Input" value={this.admin.location} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
              <div className="FormField">
                {/*Write code here to create close button */}
                <button type="submit" className="FormField__Button" onClick={this.handleClose}>Close</button>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewProfile;