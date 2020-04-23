import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from "uuid/v4";
import './Form.css';

const Form = ({ createAppointment }) => {

  // STATES
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: ""
  });
  const { pet, owner, date, time, symptoms } = appointment;

  const [ formValidation, setFormValidation ] = useState({
    validForm: true,
    validationError: ""
  });
  const { validForm, validationError } = formValidation;

  const updateAppointment = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    setFormValidation({ validForm: true, validationError: "" });

    if (pet.trim() === "" || owner.trim() === "" || date.trim() === "" ||
        time.trim() === "" || symptoms.trim() === "")
        setFormValidation({
          validForm: false,
          validationError: "All Fields Are Required"
        });
  };

  const addAppointment = appointment => {
    const newAppointment = { ...appointment, id: uuid() };
    createAppointment(newAppointment);
  };

  const scheduleAppointment = e => {
    e.preventDefault();

    // validate form
    validateForm();
    if (validForm) {
      // create appointment
      setAppointment({ ...appointment, id: uuid() })
      addAppointment(appointment);
      // restart form
      setAppointment({
        pet: "",
        owner: "",
        date: "",
        time: "",
        symptoms: ""
      });

    }
  }

  return (
    <div className="form-wrapper">
      <h2>Schedule Appointment</h2>
      { !validForm && <p className="alert-error">{ validationError }</p> }
      <form onSubmit={ scheduleAppointment }>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet's name"
          value={ pet }
          onChange={ updateAppointment }
        />
        <label>Owner's Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner's name"
          value={ owner }
          onChange={ updateAppointment }
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          value={ date }
          onChange={ updateAppointment }
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          value={ time }
          onChange={ updateAppointment }
        />
        <label>Symptoms</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          value={ symptoms }
          onChange={ updateAppointment }
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

Form.propTypes = {
  updateAppointment: PropTypes.func
};

export default Form;
