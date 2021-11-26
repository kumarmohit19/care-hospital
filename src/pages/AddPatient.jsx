import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";

class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      dob: "",
      location: "",
      mobile: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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
    if (this.canBeSubmitted()) {
     
      alert("Patient Added successfully");
      patientDetailsData.add(
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );
      this.props.history.push("/allPatients");
    }
  }
  handleCancel(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }
  canBeSubmitted() {
    const { name, email, dob, location, mobile } = this.state;
    return (
      name.length > 0 &&
      email.length > 0 &&
      dob.length > 0 &&
      location.length > 0 &&
      mobile.length > 0
    );
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    const name = this.state.name;
    const date=new Date();
    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "30px",
              fontSize: "2em"
            }}
          >
            Adding a Patient
          </p>
        </div>
        {/* Write code here to create fields and input labels for name,email,dob,mobileno and location  */}
        <div className="FormCenter">
          <div className="FormTitle">
            
          </div>
          <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
              <label htmlFor="name" className="FormField__Label">Name</label>
              <input type="text" name="name" id="name" className="FormField__Input" value={this.name} onChange={this.handleChange} placeholder="Enter email"/>
              </div>
              <div className="FormField">
              <label htmlFor="email" className="FormField__Label">Email ID</label>
              <input type="email" id="email"  name="email" className="FormField__Input" value={this.email} onChange={this.handleChange} placeholder="Enter Password"/>
              </div>
              <div className="FormField">
              <label htmlFor="dob" className="FormField__Label">Date of Birth</label>
              <input type="date" id="dob"  name="dob" className="FormField__Input" value={this.dob} onChange={this.handleChange} placeholder="Enter Password"/>
              </div>
              <div className="FormField">
              <label htmlFor="location" className="FormField__Label">Location</label>
              <input type="location" id="location"  name="location" className="FormField__Input" value={this.location} onChange={this.handleChange} placeholder="Enter Password"/>
              </div>
              <div className="FormField">
              <label htmlFor="mobileno" className="FormField__Label">Mobile No</label>
              <input type="ph" name="mobileno" id="mobileno" className="FormField__Input" value={this.mobileno} onChange={this.handleChange} placeholder="Enter email"/>
              </div>
              <div className="FormField">
                {/* Write code here to create Register Button */}
                <button type="submit" className="FormField__Button mr-3" >Register</button>
                <button type="reset" className="FormField__Button" >Cancle</button>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

export default AddPatient;