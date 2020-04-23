import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from "uuid/v4";
import './Form.css';

const Form = ({ createAppointment }) => {

  // STATES
  const [appointment, setAppointment] = useState({
    id: "",
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: ""
  });
  const { pet, owner, date, time, symptoms } = appointment;

  const [ showAlert, setAlert ] = useState(false);
  const [validationError, setValidationError ] = useState("");

  const updateAppointment = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {

    if (pet.trim() === "" || owner.trim() === "" || date.trim() === "" ||
        time.trim() === "" || symptoms.trim() === "")
      return [false, "All Fields Are Required"];
    else return [true, ""];
  };

  useEffect(() => {

    const addAppointment = appointment => {
      const newAppointment = { ...appointment, id: uuid() };
      createAppointment(newAppointment);
    };

    if (appointment.id !== "") {
      setAppointment({ ...appointment, id: uuid() });
      addAppointment(appointment);
      // restart form
      setAppointment({
        id: "",
        pet: "",
        owner: "",
        date: "",
        time: "",
        symptoms: ""
      });
    }

  }, [ appointment, createAppointment ]);

  const scheduleAppointment = e => {
    e.preventDefault();
    console.log("holi")
    // validate form
    let [validForm, validationError ] = validateForm();
    setValidationError(validationError);
    if (validForm) {
      // create appointment
      setAppointment({ ...appointment, id: uuid() })
      setAlert(false);
    } else setAlert(true);
  }

  return (
    <div className="form-wrapper">
      <h2>Schedule Appointment</h2>
      { showAlert && <p className="alert-error">{ validationError }</p> }
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
