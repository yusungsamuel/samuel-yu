import React from 'react';
import './App.css';
import Nav from "./components/nav"
import Accordion from "./components/accordion"
import OffCanvas from "./components/off-canvas"
import Section from "./components/section"
import Card from "./components/card"
import projectArr from "./project.json"


function App() {
  return (
    <>
    <OffCanvas></OffCanvas>
    <Nav></Nav>
    <Accordion></Accordion>
    <Section
      className="project"
    >
      {
      
      projectArr.map((project)=>{
        return (
          <Card
            background={project.background}
            title= {project.title}
            description= {project.description}
          ></Card>
        )
      })
      
      }
    </Section>
    </>
  );
}

export default App;
