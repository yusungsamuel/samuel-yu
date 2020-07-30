import React from 'react';
import './App.css';
import Nav from "./components/nav"
import Accordion from "./components/accordion"
import OffCanvas from "./components/off-canvas"
import Section from "./components/section"
import Card from "./components/card"
import Footer from "./components/footer"
import projectArr from "./project.json"


function App() {
  return (
    <>
      <OffCanvas></OffCanvas>
      <Nav></Nav>
      <Accordion></Accordion>
      <Section
        className="project"
        id="project"
        data="true"
      >
        {

          projectArr.map((project) => {
            return (
              <Card
                background={project.background}
                title={project.title}
                description={project.description}
                url={project.url}
                link={project.link}
              ></Card>
            )
          })

        }
      </Section>
      <Section
        className="about"
        id="about"
      >
        <img id="selfie" src={process.env.PUBLIC_URL+"/assets/images/selfie.png"}  />
        <header>About</header>
        <p>
          Samuel Yu is a Full Stack Web Developer based in San Francisco, California, with a passion in building responsive and user friendly websites. After graduating from UC Davis with a Bachelor of Science in Pharmaceutical Chemistry, I worked at Genentech in a provider support role. Seeking a career change and to follow my interest, I completed a 12 week Full Stack Web Development bootcamp at UC Berkeley. I have experience working with trending web development technologies such as React and Node. I am a continous learner who is looking for opportunities to further develop my professional skills at a company making a positive social impact.
        </p>

        <hr></hr>

        <header>Technologies</header>
        <div className="wrapper">
          <i class="devicon-bootstrap-plain-wordmark colored"></i>
          <i class="devicon-css3-plain-wordmark colored"></i>
          <i class="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-mysql-plain-wordmark colored"></i>
          <i class="devicon-nodejs-plain colored"></i>
          <i class="devicon-react-original-wordmark colored"></i>
          <i class="devicon-sequelize-plain-wordmark colored"></i>
          <i class="devicon-mongodb-plain-wordmark colored"></i>
          <i class="devicon-express-original-wordmark colored"></i>
          <i class="devicon-heroku-plain-wordmark colored"></i>
          <i class="devicon-jquery-plain-wordmark colored"></i>
        </div>

      </Section>
    
        <Footer></Footer>
    </>
  );
}

export default App;
