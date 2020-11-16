import React from 'react';
import './calendly.css';
// import Time from './time/time';
import TimeFinal from './time/time-final';
import DateToday from './date/date';

function Calendly() {
  return (
    <div className="Calendly">
      <header className="Calendly-header">
        <p className="heading">
          Calendly
        </p>
      </header>
      <div className="divider" />
      <DateToday />
      <div className="divider" />
      <p className="time-select">Select a Time</p>
      <TimeFinal /> 
    </div>
  );
}

export default Calendly;


