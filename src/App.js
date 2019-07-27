import React from 'react';
import ArrowsWrapper from './components/ArrowsWrapper';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="calendar__wrapper">
      <ArrowsWrapper />
      <Calendar />
    </div>
  );
}

export default App;
