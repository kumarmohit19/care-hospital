import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import {adminDetailsData} from "./data.js"

import "../App.css";
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      email: "",
      password: "",
      dob: "",
      mobileno: "",
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) { 
    
    e.preventDefault();
    
    if (this.canBeSubmitted()) {
      adminDetailsData.add(
        this.state.uname,
        this.state.email,
        this.state.password,
        this.state.dob,
        this.state.mobileno,
        this.state.location
        );
      this.setState({name: e.target.value});
      this.props.history.push("/sign-in");
    }
  }
  canBeSubmitted() {
    const {
      uname,
      email,
      password,
      dob,
      mobileno,
      location
      
      
    } = this.state;
    return (
      uname.length > 4 &&
      email.length > 4 &&
      password.length > 4 &&
      dob.length > 4 &&
      mobileno.length > 4 &&
      location.length > 4 
      
    );
  }

  render() {
    return (
      <div>
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Digital Medical Record Database
          </h3>
        </div>
        <div className="FormCenter">
          <div className="FormTitle">
            <NavLink to="/sign-in" className="FormTitle__Link">
              Login
            </NavLink>{" "}
            or
            <NavLink exact to="/" className="FormTitle__Link">
              Register
            </NavLink>
          </div>

          <form onSubmit={this.handleSubmit} className="FormFields">
        
            
            {/*Write code here to create uname, email, dob, location, mobileno labels and inputs */}
            <div className="FormField">
             <label htmlFor="uname" className="FormField__Label">Username</label>
             <input type="text" name="uname" id="uname" className="FormField__Input" value={this.uname} onChange={this.handleChange} placeholder="Enter email"/>
            </div>
            <div className="FormField">
             <label htmlFor="email" className="FormField__Label">Email ID</label>
             <input type="email" id="email"  name="email" className="FormField__Input" value={this.email} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
            <div className="FormField">
             <label htmlFor="password" className="FormField__Label">Password</label>
             <input type="text" name="password" id="password" className="FormField__Input" value={this.password} onChange={this.handleChange} placeholder="Enter email"/>
            </div>
            <div className="FormField">
             <label htmlFor="dob" className="FormField__Label">Date of Birth</label>
             <input type="date" id="dob"  name="dob" className="FormField__Input" value={this.dob} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
            <div className="FormField">
             <label htmlFor="mobileno" className="FormField__Label">Mobile No</label>
             <input type="ph" name="mobileno" id="mobileno" className="FormField__Input" value={this.mobileno} onChange={this.handleChange} placeholder="Enter email"/>
            </div>
            <div className="FormField">
             <label htmlFor="location" className="FormField__Label">Location</label>
             <input type="location" id="location"  name="location" className="FormField__Input" value={this.location} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
            <div className="FormField">
              {/* Write code here to create Register Button */}
              <button type="submit" className="FormField__Button" >Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;