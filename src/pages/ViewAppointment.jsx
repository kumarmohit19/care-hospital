import React, { Component } from "react";
import NavBar from "./NavBar";
import {appDetailsData} from "./data.js"

class ViewAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
     appointment : appDetailsData.getAppointmentDetails(props.match.params.appId)
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allAppointments");
  }

  render() {
   const {appointment} = this.state;
   if(!appointment) {
     return <h1>No appointments found</h1>
   }
    return (
      <div>
        <NavBar />
        <div>
          <div>
            <p
              style={{
                textAlign: "center",
                paddingBottom: "10px",
                paddingTop: "30px",
                fontSize: "2em"
              }}
            >
              Viewing Appointment
            </p>
          </div>
        </div>
        <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
            {/* Write code here to display name, appdate, slot, description and disease */}
            <div className="FormField">
             <span htmlFor="name" className="">Username</span>
             <input type="text" name="name" id="name" className="FormField__Input" value={this.appointment && this.appointment.name}  placeholder="Enter email"/>
            </div>
            <div className="FormField">
             <span htmlFor="disease" className="">disease</span>
             <input type="text" id="disease"  name="disease" className="FormField__Input" value={this.appointment && this.appointment.disease}  placeholder="Enter Password"/>
            </div>
            <div className="FormField">
             <span htmlFor="appdate" className="">Date</span>
             <input type="date" id="appdate"  name="appdate" className="FormField__Input" value={this.appointment && this.appointment.appdate}  placeholder="Enter Password"/>
            </div>
            <div className="FormField">
             <span htmlFor="slot" className="">Slot</span>
             <input type="text" name="slot" id="slot" className="FormField__Input" value={this.appointment && this.appointment.slot}  placeholder="Enter email"/>
            </div>
            <div className="FormField">
             <span htmlFor="description" className="">Description</span>
             <input type="text" id="description"  name="description" className="FormField__Input" value={this.appointment && this.appointment.description}  placeholder="Enter Password"/>
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

export default ViewAppointment;