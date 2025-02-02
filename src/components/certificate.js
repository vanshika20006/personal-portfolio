import React from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap"; // Importing react-bootstrap components
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import certImg1 from "../assets/img/dsa.png"; 
import certImg2 from "../assets/img/web.png";
import certImg3 from "../assets/img/intern.png";
import certImg4 from "../assets/img/python.png";
import certImg5 from "../assets/img/dev.png";
import certImg6 from "../assets/img/gdsc.png";
import certImg7 from "../assets/img/aws.png";
import colorSharp from "../assets/img/color-sharp.png"; 

export const Certificate = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="certificate-bx wow zoomIn">
              <h2>Certifications</h2>
              <p className="certificate-description">
                I have earned several certifications that have helped me enhance my skills and broaden my expertise. 
                Below are some of the key certifications I have acquired over time:
              </p>

              <Tab.Container id="certificates-tabs" defaultActiveKey="webDevelopment">
                <Row>
                  
                  <Col sm={12}>
                    <Tab.Content>
                      <Tab.Pane eventKey="webDevelopment">
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme certificate-slider">
                        <div className="item certificate-item">
                            <img src={certImg3} alt="Advanced Web Cert" />
                            <h5>Frontend developer intern</h5>
                          </div>
                          <div className="item certificate-item">
                            <img src={certImg1} alt="Web Development Cert" />
                            <h5>Data Structure</h5>
                          </div>
                          <div className="item certificate-item">
                            <img src={certImg2} alt="Advanced Web Cert" />
                            <h5>Web Development</h5>
                          </div>

                          

                          <div className="item certificate-item">
                            <img src={certImg4} alt="Python Cert" />
                            <h5>Python</h5>
                            
                          </div>

                          <div className="item certificate-item">
                            <img src={certImg5} alt="Development Cert" />
                            <h5>Intro to web Development</h5>
                            
                          </div>
                          <div className="item certificate-item">
                            <img src={certImg6} alt="Community Certificate" />
                            <h5>GDSC Community</h5>
                            
                          </div>

                          <div className="item certificate-item">
                            <img src={certImg7} alt="AWS Certificate" />
                            <h5>AWS cloud club</h5>
                            
                          </div>
                        </Carousel>
                      </Tab.Pane>
                      
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
