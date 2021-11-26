import React, { Component } from "react";
import "../App.css";
import NavBar from "./NavBar.jsx";
import { patientDetailsData } from "./data.js";
import {Route} from "react-router-dom";

class EditPatient extends Component {
  constructor(props) {
    super(props);
      const patient = patientDetailsData.getPatientDetails(props.match.params.id) || undefined;
    this.state = {
      name: patient.name || "",
      email: patient.email || "",
      dob: patient.dob || "",
      location: patient.location || "",
      mobile: patient.mobile || "",
      patient: patient
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
    handleSubmit(e) {
  
    if (this.canBeSubmitted()) {
     
      e.preventDefault();
      
      patientDetailsData.edit(
        this.state.patient.id,
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );
      
      this.props.history.push("/allPatients");
    }
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
  handleCancel(e) {
    
    this.props.history.push("/allPatients");
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    
    this.setState({
      [name]: value
    });
  }
  render() {
    const { patient } = this.state;
    if (!patient) {
      return (<div>Patient doesnot exist</div>)
    }

    
    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "10px",
              fontSize: "2em"
            }}
          >
            Edit patient
          </p>
        </div>
        <div className="FormCenter">
          <div className="FormTitle">
            
          </div>
            <form onSubmit={this.handleSubmit} className="FormFields">
              {/* Write code here to create labels and input fields for edit patient like name,email,dob,location and mobile*/}
              <div className="FormField">
             <label htmlFor="name" className="FormField__Label">Username</label>
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
             <label htmlFor="mobileno" className="FormField__Label">Mobile No</label>
             <input type="ph" name="mobileno" id="mobileno" className="FormField__Input" value={this.mobileno} onChange={this.handleChange} placeholder="Enter email"/>
            </div>
            <div className="FormField">
             <label htmlFor="location" className="FormField__Label">Location</label>
             <input type="text" id="location"  name="location" className="FormField__Input" value={this.location} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
              <div className="SideRow">
               {/* Write code here to create submit and cancel buttons */}
               <button type="submit" className="FormField__Button" >Submit</button>
               <button type="reset" className="FormField__Button" >Cancle</button>
              </div>
            </form>
        </div>
      </div>
    );
  }
}

export default EditPatient;