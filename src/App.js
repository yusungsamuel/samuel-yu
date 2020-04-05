import React from 'react';
import './App.css';
import Nav from "./components/nav"
import Accordion from "./components/accordion"
import OffCanvas from "./components/off-canvas"

function App() {
  return (
    <>
    <OffCanvas></OffCanvas>
    <Nav></Nav>
    <Accordion></Accordion>
    </>
  );
}

export default App;
