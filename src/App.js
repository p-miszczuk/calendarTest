import React from 'react';
import ArrowsWrapper from './components/ArrowsWrapper';
import Calendar from './components/Calendar';
import ButtonMore from "./components/ButtonMore"

function App() {
  return (
    <div className="calendar__wrapper">
      <ArrowsWrapper />
      <Calendar />
      <ButtonMore />
    </div>
  );
}

export default App;
