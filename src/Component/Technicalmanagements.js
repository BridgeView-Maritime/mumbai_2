import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import about_img from "../images/tech_img.jpg"
function Technicalmanagements() {
  return (
    <>
    
    <Container>

    <Row>
      <Col md={6} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
         <span className="purple">Technical Management of Vessel</span>
        </h1>
        <p className="home-about-body  text-center">
        We aim to provide end-to-end maritime solutions with precisely and expertly tailored services, where great technical expertise and a diverse product portfolio create optimal efficiency, productivity and customer experience. 
Presently we are doing management of 04 Indian Registered Tugs.
         
        </p>
      </Col>
      <Col md={5} className="myAvtar tech_img">
        {/* <Tilt> */}
          <img src={about_img} className="img-fluid img_about" alt="avatar"  />
        {/* </Tilt> */}
      </Col>
    </Row>
  </Container>
 </>
  )
}

export default Technicalmanagements