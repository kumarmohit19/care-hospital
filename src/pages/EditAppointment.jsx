import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import {appDetailsData} from "./data.js"

import "../App.css";

class EditAppointment extends Component {
  constructor(props) {
    super(props);
    const appointment  = appDetailsData.getAppointmentDetails(props.match.params.appId) || undefined;
    this.state = {
      name: appointment.name|| "",
      disease: appointment.disease||"",
      appdate: appointment.appdate || "",
      slot: appointment.slot || "",
      description: appointment.description || "",
      appointment:appointment
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleSubmit(e) {
    
    console.log("Details",this.state.appointment.appId,
         this.state.name,
         this.state.disease,
         this.state.appdate,
         this.state.slot,
         this.state.description)
      if(true) {
      e.preventDefault();
      
      appDetailsData.edit(
         this.state.appointment.appId,
         this.state.name,
         this.state.disease,
         this.state.appdate,
         this.state.slot,
         this.state.description
        );
      this.props.history.push("/allAppointments");
    }
  }

  canBeSubmitted() {
    const { name, disease, appdate, slot, description } = this.state;
    return (
      name.length > 0 &&
      disease.length > 0 &&
      appdate.length > 0 &&
      slot.length > 0 &&
      description.length > 0
    );
  }
  handleCancel(e) {
    this.props.history.push("/allAppointments");
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
    const {appointment} = this.state;
    
    if(!appointment) {
    return (<h1>No appointments Found</h1>);
    }
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
            Edit Appointment
          </p>
        </div>
        <div className="FormCenter">
          <div className="FormTitle">
            
          </div>
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*it should have fields like name, disease, appdate, slot, description, submit and cancel buttons */}
            <div className="FormField">
             <label htmlFor="name" className="FormField__Label">Username</label>
             <input type="text" name="name" id="name" className="FormField__Input" value={this.name} onChange={this.handleChange} placeholder="Enter email"/>
            </div>
            <div className="FormField">
             <label htmlFor="disease" className="FormField__Label">disease</label>
             <input type="disease" id="disease"  name="disease" className="FormField__Input" value={this.disease} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
            <div className="FormField">
             <label htmlFor="appdate" className="FormField__Label">Date of Birth</label>
             <input type="date" id="appdate"  name="appdate" className="FormField__Input" value={this.appdate} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
            <div className="FormField">
             <label htmlFor="slot" className="FormField__Label">Mobile No</label>
             <input type="text" name="slot" id="slot" className="FormField__Input" value={this.slot} onChange={this.handleChange} placeholder="Enter email"/>
            </div>
            <div className="FormField">
             <label htmlFor="description" className="FormField__Label">description</label>
             <input type="text" id="description"  name="description" className="FormField__Input" value={this.description} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
              <div className="SideRow">
               {/* Write code here to create submit and cancel buttons */}
               <button type="submit" className="FormField__Button" >Submit</button>
               <button type="reset" className="FormField__Button" onClick={this.handleCancel} >Cancle</button>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditAppointment;