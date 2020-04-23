import React from 'react';
import PropTypes from 'prop-types';
import "./Appointment.css";

class Appointment extends React.Component {

  render = () => {
    const { appointment } = this.props;

    return (
      <div className="Appointment">
        <p>Pet: <span>{ appointment.pet }</span></p>
        <p>Owner: <span>{ appointment.owner }</span></p>
        <p>Date: <span>{ appointment.date }</span></p>
        <p>Time: <span>{ appointment.time }</span></p>
        <p>Symptoms: <span>{ appointment.symptoms }</span></p>
        <button
          className="button delete u-full-width"
          onClick={ this.props.deleteAppointmentById.bind(this, this.props.appointment.id) }
        >
          Delete Appointment
        </button>
      </div>
    );
  }
}

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  deleteAppointmentById: PropTypes.func.isRequired
}

export default Appointment;
