import React, { useState } from 'react';
import './App.css';
import EventDashboard from '../..//features/events/eventDashboard/EventDashboard'
import NavBar from '../../features/events/nav/NavBar'
import { Container } from 'semantic-ui-react'

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </>
  );
}

export default App;
