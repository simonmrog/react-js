import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import Appointment from './components/Appointment';

const App = () => {

  let initAppointments = JSON.parse(localStorage.getItem("appointments"));
  if (!initAppointments) initAppointments = [];
  const [ appointments, setAppointments ] = useState(initAppointments);
  
  useEffect(() => {
    if (appointments.length > 0)
      localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const createAppointment = appointment => {
    setAppointments([ ...appointments, appointment ]);
  };

  const deleteAppointmentById = id => {
    const newAppointements = appointments.filter(
      appointment => appointment.id !== id
    );
    setAppointments(newAppointements);
  };

  const title = appointments.length === 0 ? 
    "free agenda" : "Manage your Appointments"

  return (
    <div className="App">
      <h1>Medical Appointments</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={ createAppointment }/>
          </div>
          <div className="one-half column">
            <h2>{ title }</h2>
            {  }
            { appointments.map(appointment => (
                <Appointment
                  key={appointment.id}
                  appointment={ appointment }
                  deleteAppointmentById={ deleteAppointmentById }
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
