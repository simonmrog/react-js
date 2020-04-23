import React from 'react';
import PropTypes from 'prop-types';
import uuid from "uuid/v4";
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: {
        id: "",
        pet: "",
        owner: "",
        date: "",
        time: "",
        symptoms: ""
      },
      showAlert: false
    };

    this.validForm = true;
    this.validationError = "";
  }

  updateAppointment = e => {
    let input = e.target;
    this.setState(prevState => ({
      appointment: {
        ...prevState.appointment, [input.name]: input.value
      }
    }));
  };

  validateForm = () => {
    if (this.state.appointment.pet.trim() === "" ||
        this.state.appointment.owner.trim() === "" ||
        this.state.appointment.date.trim() === "" ||
        this.state.appointment.time.trim() === "" ||
        this.state.appointment.symptoms.trim() === "")
          return [false, "All Fields Are Required"];
      return [true, null];
  };

  addAppointment = appointment => {
    this.props.createAppointment(appointment);
  };

  componentDidUpdate = () => {
    if (this.state.appointment.id !== "") {
      this.addAppointment(this.state.appointment);
      // restart form
      this.setState({
        appointment: {
          id: "",
          pet: "",
          owner: "",
          date: "",
          time: "",
          symptoms: ""
        }});
    }
  };

  scheduleAppointment = e => {
    e.preventDefault();

    // validate form
    [ this.validForm, this.validationError ] = this.validateForm();
    // create appointment
    if (this.validForm) {
      this.setState(prevState => ({
        appointment: { ...prevState.appointment, id: uuid() }
      }));
      this.setState({ showAlert: false });
    } else this.setState({ showAlert: true });
  }

  render = () => {
    const { pet, owner, date, time, symptoms } = this.state.appointment;
    
    return (
      <div className="form-wrapper">
        <h2>Schedule Appointment</h2>
        { this.state.showAlert && <p className="alert-error">{ this.validationError }</p> }
        <form onSubmit={ this.scheduleAppointment }>
          <label>Pet Name</label>
          <input
            type="text"
            name="pet"
            className="u-full-width"
            placeholder="Pet's name"
            value={ pet }
            onChange={ this.updateAppointment }
          />
          <label>Owner's Name</label>
          <input
            type="text"
            name="owner"
            className="u-full-width"
            placeholder="Owner's name"
            value={ owner }
            onChange={ this.updateAppointment }
          />
          <label>Date</label>
          <input
            type="date"
            name="date"
            className="u-full-width"
            value={ date }
            onChange={ this.updateAppointment }
          />
          <label>Time</label>
          <input
            type="time"
            name="time"
            className="u-full-width"
            value={ time }
            onChange={ this.updateAppointment }
          />
          <label>Symptoms</label>
          <textarea
            name="symptoms"
            className="u-full-width"
            value={ symptoms }
            onChange={ this.updateAppointment }
          >
          </textarea>
          <button
            type="submit"
            className="u-full-width button-primary"
          >Schedule Appointment</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  updateAppointment: PropTypes.func
};

export default Form;
