import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Stock Market Portfolio App",
      description: "Real-time stock tracking and portfolio management tool for investors",
      imgUrl: projImg1,
      
    },
    {
      title: "Nagar Nigam Map",
      description: "Interactive map for civic services, providing real-time data on municipal facilities and services.",
      imgUrl: projImg2,
    },
    {
      title: "Amazon Clone",
      description: "E-commerce platform replicating Amazon’s core features, including product listings, cart, and checkout functionalities.",
      imgUrl: projImg3,
    },
    {
      title: "Library Management System",
      description: "A system to manage library inventory, book issue/return, and user records efficiently.",
      imgUrl: projImg4,
    },
    {
      title: "Landing Page",
      description: "Simple yet effective landing page to capture user attention and drive conversions.",
      imgUrl: projImg5,
    },
    {
      title: "Snake Game",
      description: "A classic snake game built with JavaScript, focusing on UI and responsive gameplay.",
      imgUrl: projImg6,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My projects showcase my expertise in developing innovative and efficient web solutions, combining frontend and backend technologies.</p>
                <a href={"https://github.com/vanshika20006"} target="_blank" rel="noopener noreferrer" className="center-link">
                  View on GitHub
                          </a>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
