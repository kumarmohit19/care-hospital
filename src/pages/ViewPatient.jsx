import React, { Component } from "react";
import NavBar from "./NavBar";
import { patientDetailsData } from "./data.js";
class ViewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
     patient : patientDetailsData.viewPatientDetails(props.match.params.id)
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allPatients");
  }

  render() {
    const {patient} = this.state;
    if(!patient) {
      return <h1>No patients found</h1>
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
            Viewing Patient
          </p>
        </div>
        <div className="FormCenter">
              {/* Write code here to create fields for name, disease,appdate, slot and mobile*/}
              <div className="FormField">
             <span htmlFor="name" className="">Username</span>
             <input type="text" name="name" id="name" className="FormField__Input" value={this.patient.name} onChange={this.handleChange} placeholder="Enter email"/>
            </div>
            <div className="FormField">
             <span htmlFor="email" className="">Email ID</span>
             <input type="email" id="email"  name="email" className="FormField__Input" value={this.patient.email} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
            <div className="FormField">
             <span htmlFor="dob" className="">Date of Birth</span>
             <input type="date" id="dob"  name="dob" className="FormField__Input" value={this.patient.dob} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
            <div className="FormField">
             <span htmlFor="mobileno" className="">Mobile No</span>
             <input type="ph" name="mobileno" id="mobileno" className="FormField__Input" value={this.patient.mobileno} onChange={this.handleChange} placeholder="Enter email"/>
            </div>
            <div className="FormField">
             <span htmlFor="location" className="">Location</span>
             <input type="location" id="location"  name="location" className="FormField__Input" value={this.patient.location} onChange={this.handleChange} placeholder="Enter Password"/>
            </div>
              <div className="FormField">
                {/*Write code here to create close button */}
                <button type="submit" className="FormField__Button" onClick={this.handleClose}>Close</button>
              </div>
            
          
        </div>
      </div>
    );
  }
}
export default ViewPatient;