import React from 'react';
import './App.css';

import Form from './components/Form';
import Appointment from './components/Appointment';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appointments: JSON.parse(localStorage.getItem("appointments")) || []
    };
    this.title = this.state.appointments.length === 0 ? 
      "free agenda" : "Manage your Appointments"
  }

  componentDidUpdate = () => {
    if (this.state.appointments.length > 0)
      localStorage.setItem("appointments", JSON.stringify(this.state.appointments));
    else localStorage.removeItem("appointments");
  }

  createAppointment = appointment => {
    this.setState(prevState => ({
      appointments: [ ...prevState.appointments, appointment ]
    }));
  };

  deleteAppointmentById = id => {
    const newAppointements = this.state.appointments.filter(
      appointment => appointment.id !== id
    );
    this.setState({
      appointments: newAppointements
    });
  };

  render = () => {
    return (
      <div className="App">
        <h1>Medical Appointments</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Form createAppointment={ this.createAppointment }/>
            </div>
            <div className="one-half column">
              <h2>{ this.title }</h2>
              {  }
              { this.state.appointments.map(appointment => (
                  <Appointment
                    key={appointment.id}
                    appointment={ appointment }
                    deleteAppointmentById={ this.deleteAppointmentById }
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
